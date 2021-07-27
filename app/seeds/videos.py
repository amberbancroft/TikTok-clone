from app.models import db, Video


def seed_videos():
    one = Video(
        video_url='https://www.tiktok.com/@mortythemisfit/video/6989305305125489926?is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=6989330821108155910', 
        description='doggie', poster_Id=1)

    two = Video(
        video_url='https://www.tiktok.com/@afuite/video/6983219322697043202?is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=6989330821108155910', 
        description='cat', poster_Id=1)

    three = Video(
    video_url='https://www.tiktok.com/@thebeagleandthebun/video/6985633835677469958?is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=6989330821108155910', 
    description='cuddles', poster_Id=2)



    db.session.add(one)
    db.session.add(two)
    db.session.add(three)


    db.session.commit()


def undo_videos():
    db.session.execute('TRUNCATE videos RESTART IDENTITY CASCADE;')
    db.session.commit()