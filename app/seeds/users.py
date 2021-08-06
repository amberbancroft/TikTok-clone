from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='GordanRamsay', profile_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/CroppedFocusedImage121578650-50-GR-with-Wellington.jpeg',
         email='demo@aa.io', password='password')
    chloe = User(
        username='chloe', profile_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/Mental-Strong-Women-min.jpeg',
         email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', profile_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/what_makes_a_man_more_manly_main0.jpeg', 
        email='bobbie@aa.io', password='password')

    db.session.add(demo)
    db.session.add(chloe)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
