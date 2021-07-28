from app.models import db, Video


def seed_videos():
    one = Video(
        video_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/v07044g50000c29c9js6gm607oppjrtg.mp4', 
        description='d', poster_Id=1)

    two = Video(
        video_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/v09044g40000c3dtbbh8k3lsrjiubvu0.mp4', 
        description='c', poster_Id=1)

    three = Video(
    video_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/v09044g40000c3lidejc77u5ac6mdp5g.mp4', 
    description='u', poster_Id=1)

    four = Video(
    video_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/v09044g40000c3mdja3c77u6gobfp8q0.mp4', 
    description='o', poster_Id=2)

    five = Video(
    video_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/v09044g40000c3r201rc77u8jjssmqlg.mp4', 
    description='l', poster_Id=2)

    six = Video(
    video_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/v09044g40000c3rce93c77udnf6i6cu0.mp4', 
    description='m', poster_Id=3)

    seven = Video(
    video_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/v09044g40000c3rhomjc77u5jq1nq030.mp4', 
    description='a', poster_Id=3)

    eight = Video(
    video_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/v09044g40000c40b5tjc77u8b91ldne0.mp4', 
    description='e', poster_Id=3)

    nine = Video(
    video_url='https://tiktok-clone.s3.us-west-1.amazonaws.com/v09044g40000c40cpi3c77u66iuughag.mp4', 
    description='i', poster_Id=3)



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