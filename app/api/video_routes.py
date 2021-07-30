from flask import Blueprint, request, jsonify
# from flask_login import login_required
from app.models import User, Video, db
from app.awsS3 import (upload_file_to_s3, allowed_file, get_unique_filename)

video_routes = Blueprint('videos', __name__)

# Routes Defined
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

# @review_routes.route('/<int:id>', methods=['PUT'])
# def review_edit(id):
#     form = ReviewForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         edit_review = Review.query.get(id)
#         form.populate_obj(edit_review)
#         db.session.commit()
#         return edit_review.to_dict()
#     print("Unable to validate: ", form.errors)
#     return {'errors': form.errors}


# @review_routes.route('/<int:id>', methods=['DELETE'])
# def delete_review_by_id(id):
#     delete_review = Review.query.get(id)
#     db.session.delete(delete_review)
#     db.session.commit()
#     return {'delete_review': delete_review.to_dict()}

# def validation_error_messages(validation_errors):
#     errorMessages = []
#     for field in validation_errors:
#         for error in validation_errors[field]:
#             errorMessages.append(f'{field} : {error}')
#     return errorMessages