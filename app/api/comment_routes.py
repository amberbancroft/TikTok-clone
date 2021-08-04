from flask import Blueprint, request
from app.models import Comment, db

comment_routes = Blueprint('comments', __name__)

# Routes Defined:
#Get
@comment_routes.route('/')
def comment():
    all_comments = Comment.query.all()
    return { 'all_comments': [comment.to_dict() for comment in all_comments] }