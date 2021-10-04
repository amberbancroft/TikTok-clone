"""empty message

Revision ID: 9191c293a375
Revises: 
Create Date: 2021-10-04 14:29:12.521553

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9191c293a375'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('profile_url', sa.String(), nullable=True),
    sa.Column('bio', sa.String(), nullable=True),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('videos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('poster_Id', sa.Integer(), nullable=False),
    sa.Column('description', sa.String(length=60), nullable=True),
    sa.Column('video_url', sa.String(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['poster_Id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('content', sa.String(length=60), nullable=True),
    sa.Column('poster_Id', sa.Integer(), nullable=False),
    sa.Column('video_Id', sa.Integer(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['poster_Id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['video_Id'], ['videos.id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('comments')
    op.drop_table('videos')
    op.drop_table('users')
    # ### end Alembic commands ###
