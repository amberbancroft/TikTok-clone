from .db import db
from .user import User
import datetime

# Specificying that this class is actually a model
class Comment(db.Model):
    __tablename__ = 'comments' #Creating tablename

    # Creating table columns with requirements
    id = db.Column(db.Integer, nullable=False, primary_key=True)
    content = db.Column(db.String(60), nullable=True)
    poster_Id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    video_Id = db.Column(db.Integer, db.ForeignKey('videos.id', ondelete='CASCADE'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    # DataBase relationship
    user = db.relationship('User', back_populates='comments', lazy='subquery')
    video = db.relationship('Video', back_populates='comments', lazy='subquery')

    # Returning JSON object
    def to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            'poster_Id': self.poster_Id,
            'video_Id': self.video_Id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'username': User.query.get(self.poster_Id).username,
            'profile_url': User.query.get(self.poster_Id).profile_url,
        }