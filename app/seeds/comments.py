from app.models import db, Comment


def seed_comments():
    one = Comment(content='This was absolutely hilarious!', poster_Id=2, video_Id=1)
    two = Comment(content='Dobby is my hero', poster_Id=3, video_Id=1)
    three = Comment(content='Harry Potter for life!', poster_Id=7, video_Id=1)
    four = Comment(content='#TeamSlytherin', poster_Id=7, video_Id=1)

    five  = Comment(content='', poster_Id=1, video_Id=2)
    six  = Comment(content='', poster_Id=3, video_Id=2)
    seven  = Comment(content='', poster_Id=6, video_Id=2)
    eight  = Comment(content='', poster_Id=5, video_Id=2)
    nine  = Comment(content='', poster_Id=4, video_Id=2)

    #ten  = Comment(content='', poster_Id=7, video_Id=3)
    #eleven   = Comment(content='', poster_Id=5, video_Id=3)
    #twelve   = Comment(content='', poster_Id=1, video_Id=3)

    # = Comment(content='', poster_Id= , video_Id=4)
    # = Comment(content='', poster_Id= , video_Id=4)
    # = Comment(content='', poster_Id= , video_Id=4)

    # = Comment(content='', poster_Id= , video_Id=5)
    # = Comment(content='', poster_Id= , video_Id=5)
    # = Comment(content='', poster_Id= , video_Id=5)

    # = Comment(content='', poster_Id= , video_Id=6)

    # = Comment(content='', poster_Id= , video_Id=7)
    # = Comment(content='', poster_Id= , video_Id=7)



    db.session.add(one)
    db.session.add(two)
    db.session.add(three)
    db.session.add(four)
    db.session.add(five)
    db.session.add(six)
    db.session.add(seven)
    db.session.add(eight)
    db.session.add(nine)

    db.session.add()

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()