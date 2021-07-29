from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Video

video_routes = Blueprint('videos', __name__)