# Blog Web App

## Introduction

I wanted to showcase my skills in software development and full-stack development. Making an application like this helped me do that because I got to work on the front-end, back-end, and think about how I wanted to store data that will needed in order for the system to work. Working on this project, helped me learn a lot and enjoyed it a lot.

For error handling, I used try-catch blocks anytime I had to deal with sending queries and receiving data using async/await. On top of this, I created a simple middleware that would output any errors to the server console.

Some things I learned making this project are learning how to structure it to make functionality easy to find. I did my best to follow an MVC model.

For the front-end, I split code into components, modules, and pages. Components were code that I wanted to reuse multiple times throughout my web app. Modules .ts and .tsx files that dealt with layout, routing, authentication, and API.

For the back-end, I split my code into controllers, models, routes, and middleware. Controllers would deal with the logic for making queries. Schemas for the data and routes were held were models.

Something I realized after working on this project was that it is no easy task. There was a lot of research that I needed to do learn how to make the back-end secure and make an authentication system. I learned that this was a project that required months to finish and not something that could be finished in 1 month like how I originally planned.

_Note: This project is in active development_

## Stack

### Front-end

- ReactJS
- Javascript/Typescript
- ES6
- HTML/CSS
- [Material UI Icons](https://material-ui.com/components/material-icons/)
- [Styled Components](https://styled-components.com/)

### Back-end

- NodeJS
- [Express](https://expressjs.com/)
- MySQL
  - I ran a MySQL server (MariaDB) on a Raspberry Pi Zero W in my LAN network
  - I made queries to it from my back-end
  - For the purpose of this project, I did not use an ORM. My reason was so that I could practice my skills making SQL queries
- [MySQL2](https://www.npmjs.com/package/mysql2)
  - Library for making connection to MySQL server and making queries
- [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)
  - Library used in combination with cookies for authentication
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
  - Library used for hashing passwords
- [Express Validator](https://www.npmjs.com/package/express-validator)
  - Library used for validating user input sent to the server

## SQL Diagram

#### _TODO_

## Implemented Features and Future Features

### Front-end Features

- Pages
  - [x] Landing Page
  - [x] Log In Page
  - [x] Home Page
  - [x] Create Post Page
  - [x] User Profile Page
  - [x] Register Page
  - [ ] Post Page showing comments
- General Features
  - [x] Navigation menu
  - [x] Button to like posts
  - [x] Info showing amount of likes a post has
  - [x] Info showing amount of comments a post has
  - [ ] Fully functioning comment button
  - [x] Log out button
  - [ ] Search bar to follow existing users
- Responsiveness
  - [x] Mobile friendly
  - [ ] Tablet friendly
  - [ ] Desktop Friendly

### Back-end Features

- Routes
  - Users
  - Auth
  - Likes
  - Posts
  - Replies
- Controllers
  - Auth
    - [x] Create user
    - [x] Log in user
  - Likes
    - [x] Check if user has liked post
    - [x] Like/unlike post
    - [x] Get info of users who liked a post
  - Posts
    - [x] Get all posts
    - [x] Create post
    - [ ] Delete post
  - Replies
    - [x] Create reply
    - [x] Get all replies of a post
    - [x] Get all replies a user has made
  - Users
    - [x] Get user profile
    - [x] Change userhandle, profile description, date of birth, location

## Demo Videos

### Log in and Like

![LoginLike](assets/LoginLike.mkv)

### Check profiles and bottom nav

![ProfilesBottomNav](assets/ProfilesBottomNav.mkv)

### Side nav bar and logout page

![SideBarLogout](assets/SideBarLogout.mkv)

### Sign up and log in

![SignupLogin](assets/SignupLogin.mkv)

### Create a post

![CreatePost](assets/CreatePost.mkv)
