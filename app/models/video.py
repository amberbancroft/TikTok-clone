from .db import db
import datetime


class User(db.Model):
    __tablename__ = 'videos'

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    video_url = db.Column(db.String, nullable=False)
    description= db.Column(db.String(40), nullable=True)
    poster_Id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)


    def to_dict(self):
        return {
            'id': self.id,
            'video_url': self.video_url,
            'description': self.description,
            'poster_Id': self.poster_Id,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }