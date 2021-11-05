from .db import db
import datetime

class Video(db.Model):
    __tablename__ = 'videos'

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    poster_Id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    description= db.Column(db.String(60), nullable=True)
    video_url = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    # DataBase relationship
    user = db.relationship('User', back_populates='videos', lazy='subquery')
    comments = db.relationship('Comment', back_populates='video', cascade='all, delete', passive_deletes=True)

    def to_dict(self):
        return {
            'id': self.id,
            'poster_Id': self.poster_Id,
            'description': self.description,
            'video_url': self.video_url,
            'created_at': self.created_at,
            'updated_at': self.updated_at,

            # Adding user object to the video JSON object
            'user': self.user.to_dict(),
        }