from flask import Blueprint, request, jsonify
# from flask_login import login_required
from app.models import User, Video, db


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
    request_json = request.get_json()
    video_url = request.files['video_url']
    description = request.form['description']
    poster_Id = request.form['poster_id']
    print('&&&&&&&&&&&&&&&&&&&&',video_url,description,poster_Id)
    video = Video(
        video_url=video_url,
        description=description,
        poster_Id=poster_Id
    )
    print('##########################', video)
    db.session.add(video)
    db.session.commit()
    return {'video': video.to_dict()}

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