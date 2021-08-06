from app.models import db, Comment


def seed_comments():
    one = Comment(content='pooooop', poster_Id=2, video_Id=1)
    two = Comment(content='hi', poster_Id=3, video_Id=1)
    three = Comment(content='im a worm', poster_Id=3, video_Id=1)
    four = Comment(content='sushi', poster_Id=1, video_Id=3)
    five = Comment(content='jaba', poster_Id=1, video_Id=2)
    six = Comment(content='plant', poster_Id=3, video_Id=2)


    db.session.add(one)
    db.session.add(two)
    db.session.add(three)
    db.session.add(four)
    db.session.add(five)
    db.session.add(six)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()