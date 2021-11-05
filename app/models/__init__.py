# Connecting all the database tables into one file and also connecting ORM
# ORM is used to communicate with the database to make querying easier.
from .db import db
from .user import User
from .video import Video
from .comment import Comment