# TikTok
<!-- <img width="1440" alt="splashpage" src="https://user-images.githubusercontent.com/77598204/135312951-8b422903-fcb9-41fa-99f9-f20d5a3a61e6.png"> -->

*By [Amber Bancroft](https://github.com/AmberBancroft).
[Live site](https://tiktokcapstoneproject.herokuapp.com/)

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


<!-- **Key Features**
- Browse through all videos available
- Post, edit, and delete your own videos
- View all comments on videos
- post, edit, and delete your own comments -->


## MVP Feature List
* User Authentication
    * Sign Up/ Login
        
        <!-- Users have the ability to sign up for an account by inputting the requested credentials. -->
        
        <!-- ![Sign Up/Login](https://user-images.githubusercontent.com/77598204/135176306-0cdfcc62-a601-45ae-8e85-4213af5f927d.gif) -->
    * Demo User
        
        <!-- Upon arriving on the splashpage, users have the option to click the "Demo" button to be instantly logged in as the default demo user. This demo account allows them to navigate the application and all of it's authenticated features without formally creating their own account. -->
        
        <!-- ![Demo User](https://user-images.githubusercontent.com/77598204/135175508-ddb1c3a5-d8a9-4889-9921-3616506b6d44.gif) -->
* Videos
    * Uploading Videos
        
        <!-- Authenticated users can upload their own photos, allowing other users to browse their work. To post a story, you will be prompted to input a title and an image file. -->
        
        <!-- ![UploadingPhoto](https://user-images.githubusercontent.com/77598204/135177742-1c2e841e-25fe-4ca6-81c5-458beb0211c9.gif) -->
    * Editing Videos
    
      <!-- Authenticated users can edit the photos they have posted by clicking the edit button. They will then be allowed to edit the title of the desired photo. -->
      

    * Deleting Videos

      <!-- Authenticated users can delete the photos that they've posted by clicking the delete button. They will then be allowed to delete the desired photo. -->
      
        <!-- ![DeletePhoto](https://user-images.githubusercontent.com/77598204/135180252-9232328c-4a8a-47e1-b9d8-042f16c5e6e6.gif) -->

<!-- * Comments
  * Posting Comments
  * Editing Comments
  * Deleting Comments -->


## Application Architecture

### Database Schema
![Database](https://user-images.githubusercontent.com/77598204/135540257-dffa8832-dce8-4d89-b522-45c699cf9bb5.png)

### Frontend Overview
The TikTok frontend was built entirely with vanilla JavaScript, CSS, and Material-UI. 

<!-- We used a combination of form inputs and the Fetch API to provide a fully functional CRUD experience to our users. By utilizing Ajax we are also able to provide a seamlessly integrated experience to our users when they make comments, like stories, or follow other users. -->


### Backend Overview
The Python backend is a collection of frontend routes and RESTful API routes that serve data to the frontend through React/Redux. The application data is stored in a SQLAlchemy database. AWS was used to improve video and image quality as well as help render components faster on the page to improve user experience.

## Conclusion
<!-- I intended to create a clone of Flickr which is a site where you can post photos and engage in the community like many other social media platforms. I strived for a clean minimal look with high functionality. I learned a lot on the process and look forward to improving our design in the future. -->