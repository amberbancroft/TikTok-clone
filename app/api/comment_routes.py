from flask import Blueprint, request
from app.models import Comment, db

comment_routes = Blueprint('comments', __name__)

# Routes Defined:
#Get
@comment_routes.route('/')
def comment():
    all_comments = Comment.query.all()
    return { 'all_comments': [comment.to_dict() for comment in all_comments] }


# Post
@comment_routes.route('/new', methods=['POST'])
def new_comment():

    request_json = request.get_json()

    comment = Comment(
        content= request_json['content'],
        poster_Id= request_json['poster_Id'],
        video_Id= request_json['video_Id'],
    )

    db.session.add(comment)
    db.session.commit()
    return comment.to_dict()


# Edit   
@comment_routes.route('/<int:id>', methods=['PUT'])
def comment_edit(id):
    comment = Comment.query.get(id)
    content = request.json['content']
    comment.content = content
    db.session.add(comment)
    db.session.commit()
    return comment.to_dict()


# Delete
@comment_routes.route('/<int:id>', methods=['DELETE'])
def delete_comment_by_id(id):
    delete_comment = Comment.query.get(id)
    db.session.delete(delete_comment)
    db.session.commit()
    return {'delete_comment': delete_comment.to_dict()}