from app.models import db, Comment

def seed_comments():
    one = Comment(content='This was absolutely hilarious!',poster_Id=2, video_Id=1)
    two = Comment(content='Dobby is my hero', poster_Id=3, video_Id=1)
    three = Comment(content='Harry Potter for life!', poster_Id=7, video_Id=1)
    four = Comment(content='#TeamSlytherin', poster_Id=6, video_Id=1)

    five = Comment(content='Omg girl you got him so good!',poster_Id=1, video_Id=2)
    six = Comment(content='I hope my husband puts up with me like that', poster_Id=4, video_Id=2)
    seven = Comment(content="looks like you'll be sleeping on the couch tonight", poster_Id=6, video_Id=2)
    eight = Comment(content='hahahahahahaha', poster_Id=5, video_Id=2)
    nine = Comment(content='I would have been laughing so hard if this happened to me', poster_Id=4, video_Id=2)

    ten = Comment(content='Lol! you call your wife Jenny?!',poster_Id=7, video_Id=3)
    eleven = Comment(content='She really would go through the windshield', poster_Id=5, video_Id=3)
    twelve = Comment(content='so what if I drive like that....',poster_Id=1, video_Id=3)

    thirteen = Comment(content="You're so lucky the momma bear didn't come out of nowhere", poster_Id=2, video_Id=4)
    fourteen = Comment(content='What a cute little thing!', poster_Id=5, video_Id=4)
    fifteen = Comment(content='Awww it was stuck in the tree', poster_Id=3, video_Id=4)

    sixteen = Comment(content='RIP, I am wearing sandles rn', poster_Id=3, video_Id=5)
    seventeen = Comment(content='I can confirm this is how it works', poster_Id=4, video_Id=5)
    eighteen = Comment(content='Lol guess my type is a five', poster_Id=7, video_Id=5)

    nineteen = Comment(content='I came in like a wrecking ball!', poster_Id=7, video_Id=6)

    twenty = Comment(content='This is a disgrace to food everywhere.', poster_Id= 1, video_Id=7)
    twentyone = Comment(content='I made the same face my guy', poster_Id=3, video_Id=7)

    twentytwo = Comment(content='This is such a wonderful gift for a wonderful creature', poster_Id=5, video_Id=8)
    twentythree = Comment(content='Now I was to get a ferrit for my daughter', poster_Id=2, video_Id=8)

    twentyfour = Comment(content='Tbh I kinda wanna put this in my next music video', poster_Id=6, video_Id=9)
    twentyfive = Comment(content='^@miley what if we did a collab?!', poster_Id=4, video_Id=9)
    twentysix = Comment(content='What a cute bb cow', poster_Id=2, video_Id=9)


    db.session.add(one)
    db.session.add(two)
    db.session.add(three)
    db.session.add(four)
    db.session.add(five)
    db.session.add(six)
    db.session.add(seven)
    db.session.add(eight)
    db.session.add(nine)
    db.session.add(ten)
    db.session.add(eleven)
    db.session.add(twelve)
    db.session.add(thirteen)
    db.session.add(fourteen)
    db.session.add(fifteen)
    db.session.add(sixteen)
    db.session.add(seventeen)
    db.session.add(eighteen)
    db.session.add(nineteen)
    db.session.add(twenty)
    db.session.add(twentyone)
    db.session.add(twentytwo)
    db.session.add(twentythree)
    db.session.add(twentyfour)
    db.session.add(twentyfive)
    db.session.add(twentysix)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
