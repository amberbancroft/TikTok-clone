from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    display_name = db.Column(db.String(40), nullable=False, unique=True)
    profile_url = db.Column(db.String, nullable=True)
    bio = db.Column(db.String, nullable=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'display_name': self.display_name,
            'profile_url': self.profile_url,
            'bio': self.bio,
            'email': self.email
        }
