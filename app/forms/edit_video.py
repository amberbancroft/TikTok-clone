from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Video, User


class EditVideoForm(FlaskForm):
    description = StringField('description', validators=[DataRequired()])
