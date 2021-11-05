from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    username = db.Column(db.String(40), nullable=False, unique=True)
    profile_url = db.Column(db.String, nullable=True, default='https://tiktok-clone.s3.us-west-1.amazonaws.com/grey_face.jpeg')
    bio = db.Column(db.String, nullable=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    # DataBase relationship
    videos = db.relationship('Video', back_populates='user', lazy='subquery')
    comments = db.relationship('Comment', back_populates='user', lazy='subquery')

    # Getters and Setters for password protection
    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    # Backend Authentication
    def check_password(self, password):
        return check_password_hash(self.password, password)

    # JSON object for user info
    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'profile_url': self.profile_url,
            'bio': self.bio,
            'email': self.email
        }
    
    # JSON object for user info WITH videos
    def to_dict_user_info(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'bio': self.bio,
            'videos': {video.id: video.to_dict() for video in self.videos}
        }
