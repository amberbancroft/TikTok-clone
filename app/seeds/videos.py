from app.models import db, Video


def seed_videos():
    one = Video(
        video_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/v07044g50000c29c9js6gm607oppjrtg.mp4', 
        description='I am Dobby!!!', poster_Id=1)

    two = Video(
        video_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/v09044g40000c3dtbbh8k3lsrjiubvu0.mp4', 
        description='My husband is so smart', poster_Id=1)

    three = Video(
        video_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/v09044g40000c3lidejc77u5ac6mdp5g.mp4', 
        description='This is a safety concern!', poster_Id=1)

    four = Video(
        video_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/v09044g40000c3mdja3c77u6gobfp8q0.mp4', 
        description='I rescued a baby bear today', poster_Id=2)

    five = Video(
        video_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/v09044g40000c3r201rc77u8jjssmqlg.mp4', 
        description='How the female point system works. Listen up Boys!', poster_Id=2)

    six = Video(
        video_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/v09044g40000c3rce93c77udnf6i6cu0.mp4', 
        description='The mental health is real.', poster_Id=3)

    seven = Video(
        video_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/v09044g40000c3rhomjc77u5jq1nq030.mp4', 
        description='Too Spicy', poster_Id=3)

    eight = Video(
        video_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/v09044g40000c40b5tjc77u8b91ldne0.mp4', 
        description="My pet ferrit's dream came true today", poster_Id=4)

    nine = Video(
        video_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/v09044g40000c40cpi3c77u66iuughag.mp4', 
        description='Baby cow spa day', poster_Id=5)



    db.session.add(one)
    db.session.add(two)
    db.session.add(three)
    db.session.add(four)
    db.session.add(five)
    db.session.add(six)
    db.session.add(seven)
    db.session.add(eight)
    db.session.add(nine)


    db.session.commit()


def undo_videos():
    db.session.execute('TRUNCATE videos RESTART IDENTITY CASCADE;')
    db.session.commit()