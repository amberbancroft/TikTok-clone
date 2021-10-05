# TikTok

<img width='1440' alt='home screen' src='https://user-images.githubusercontent.com/77598204/136069694-bbf6a7ed-7c4b-4452-abad-0076f019828a.png'>

*By [Amber Bancroft](https://github.com/AmberBancroft)- 
[Live site here](https://tiktokcapstoneproject.herokuapp.com/)

**Table of Contents**
* [Welcome to TikTok](#TikTok-at-a-glance)
* [Technologies Used](#technologies-used)
* [MVP Feature List](#mvp-feature-list)
* [Application Architecture](#application-architecture)
* [Database Schema](#database-schema)
* [Frontend Overview](#frontend-overview)
* [Backend Overview](#backend-overview)
* [Conclusion](#conclusion)

## TikTok at a Glance
TikTok (a [TikTok](https://www.tiktok.com/) clone) is a full stack application designed for posting short videos! Videos can be everything from funny to educational to share with people across the internet. The application is made with a React frontend, and the backend is a Flask server with a SQLAlchemy database.

## Technologies Used
- Frontend
  - Javascript
  - React
  - Redux
  - Material-Ui
  - CSS
- Backend
  - Flask
  - Python
  - SQLAlchemy
  - Heroku deployment
  - AWS

## MVP Feature List
* User Authentication
    * Sign Up/ Login
        
        Users have the ability to sign up for an account or login by inputting the requested credentials.

        ![Sign Up/Login](https://user-images.githubusercontent.com/77598204/136075389-ca456d64-62f6-410b-8b01-b210dd6b1f79.gif)

    * Demo User

        Upon arriving on the home page, users have the option to click the "Demo" button to be instantly logged in as the default demo user. This demo account allows them to navigate the application and all of it's authenticated features without formally creating their own account.
        
* Videos
    * Uploading Videos
        
        Authenticated users can upload their own videos, allowing other users to browse their work. To post a video, you will be prompted to input a caption and an image file.

        ![video_upload](https://user-images.githubusercontent.com/77598204/136076166-9d34e7f1-b9be-4429-ac2d-23a037bed57d.gif)

    * Editing Videos
    
      Authenticated users can edit the videos they have posted by clicking the edit button. They will then be allowed to edit the caption of the desired video.
      
    * Deleting Videos

      Authenticated users can delete the videos that they've posted by clicking the delete button.

* Comments
    * Posting Comments
        
        Authenticated users can view all comments and post comments on other users videos as well as their own.
        
        ![Posting Comments](https://user-images.githubusercontent.com/77598204/136076885-0b7bc8bc-01fd-4646-917b-b61387a3fd0a.gif)

    * Editing Comments
    
      Authenticated users can edit the comments they have posted by clicking the edit button. They will then be allowed to edit the content of the desired comment.
      
    * Deleting Comments

      Authenticated users can delete the comments that they've posted by clicking the delete button. They will then be allowed to delete the desired comment.
      
## Application Architecture

### Database Schema
![Database](https://user-images.githubusercontent.com/77598204/135540257-dffa8832-dce8-4d89-b522-45c699cf9bb5.png)

### Frontend Overview
The TikTok frontend was built entirely with vanilla JavaScript, CSS, and Material-UI. I was able to utilize React in order to deliver a full CRUD experience as well as improve upon the user interface. 

### Backend Overview
The Python backend is a collection of frontend routes and RESTful API routes that serve data to the frontend through React/Redux. The application data is stored in a SQLAlchemy database. AWS was used to improve video and image quality as well as help render components faster on the page to improve user experience.

## Conclusion
I intended to create a clone of TikTok which is a site where you can post videos and engage in the community like many other social media platforms. I strived for a clean minimal look with high functionality. I learned a lot in the process and look forward to improving our design in the future.
