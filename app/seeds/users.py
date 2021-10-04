from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='GordanRamsay', profile_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/CroppedFocusedImage121578650-50-GR-with-Wellington.jpeg',
        email='demo@aa.io', password='password')
    willsmith = User(
        username='willsmith', profile_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/will_smith.jpeg',
        email='demo1@aa.io', password='password1')
    kevinhart = User(
        username='iamkevinhart', profile_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/Kevin-Hart.jpeg',
        email='demo2@aa.io', password='password2')
    selenagomez = User(
        username='selenagomez', profile_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/selena-gomez.jpeg',
        email='demo3@aa.io', password='password3')
    billnye = User(
        username='billnye', profile_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/bill-nye.jpeg',
        email='demo4@aa.io', password='password4')
    mileycyrus = User(
        username='mileycyrus', profile_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/miley-cyrus.jpeg',
        email='demo5@aa.io', password='password5')
    jenniferlawrence = User(
        username='jenniferlawrence', profile_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/jennifer.jpeg',
        email='demo6@aa.io', password='password6')


    db.session.add(demo)
    db.session.add(willsmith)
    db.session.add(kevinhart)
    db.session.add(selenagomez)
    db.session.add(billnye)
    db.session.add(mileycyrus)
    db.session.add(jenniferlawrence)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
