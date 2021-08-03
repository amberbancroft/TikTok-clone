from flask import Blueprint, request, jsonify
# from flask_login import login_required
from app.models import User, Video, db
from app.awsS3 import (upload_file_to_s3, allowed_file, get_unique_filename)

video_routes = Blueprint('videos', __name__)

# Validators defined
# def validation_error_messages(validation_errors):
#     errorMessages = []
#     for field in validation_errors:
#         for error in validation_errors[field]:
#             errorMessages.append(f'{field} : {error}')
#     return errorMessages

# Routes Defined:
#Get
@video_routes.route('/')
def video():
    all_videos = Video.query.all()
    return { 'all_videos': [video.to_dict() for video in all_videos] }

# Post
@video_routes.route('/new', methods=['POST'])
def new_video():

    # Error Handling
    if 'video' not in request.files:
        return {'errors': ['video required']}, 400

    video = request.files['video']

    if not allowed_file(video.filename):
        return {'errors': ['filetype not permitted']}, 400

    video.filename = get_unique_filename(video.filename)
    upload = upload_file_to_s3(video)
    if 'url' not in upload:
        return {'errors': [upload]}, 400

    # Grabbing from the form on the front end
    poster_Id = request.form['poster_Id']
    description = request.form['description']
    url = upload['url']
    # print('**********************', url, poster_Id, description)
    video = Video(
        poster_Id=poster_Id,
        description=description,
        video_url=url,
    )
    # print('**********************', video)
    db.session.add(video)
    db.session.commit()
    return {video.id: video.to_dict()}

#Get for delete & edit
@video_routes.route('/<int:id>')
def single_video(id):
    single_video = Video.query.get(id)
    return { 'single_video': single_video.to_dict()}

# Edit   
@video_routes.route('/<int:id>', methods=['PUT'])
def video_edit(id):
    form = EditVideoForm()
    # form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        edit_video = Video.query.get(id)
        form.populate_obj(edit_video)
        db.session.commit()
        return edit_video.to_dict()
    # print("Unable to validate: ", form.errors)
    return {'errors': form.errors}

# Delete
@video_routes.route('/<int:id>', methods=['DELETE'])
def delete_video_by_id(id):
    delete_video = Video.query.get(id)
    # print('**********************', delete_video)
    db.session.delete(delete_video)
    db.session.commit()
    return {'delete_video': delete_video.to_dict()}
