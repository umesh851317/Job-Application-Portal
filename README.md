# Job Application Portal API

A RESTful API for a Job Application Portal built with Node.js, Express.js, MongoDB, JWT authentication, Multer, and Cloudinary.

## Features

- User registration
- User login
- JWT authentication
- Resume upload
- PDF validation
- Cloudinary resume storage
- View available jobs
- Apply for jobs
- Prevent duplicate applications
- View submitted applications

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Multer
- Cloudinary
- Postman

## Installation
Clone the repository (or download the source):

git clone https://github.com/umesh851317/Job-Application-Portal  
cd Job-Application-Portal

# Install dependencies: 
npm install

# Set up environment variables:  
Create a .env file based on .env.example:
cp .env.example .env

# Run the development server:
npm start

# Build for production:
npm install


## 🔑 Demo Credentials
Email: umesh@gmail.com  
Password: 12345

 # 🚀  API Structure 

## User registration and Login

POST /auth/signUp  
POST /auth/signin

## Create Job and Get All Job

GET    /job  
POST   /job

## for Apply job and Upload resume

GET   /api/user      => (Get All Active Job)  
POST  /api/user      => (uplode Resume)  

POST   /api/jobApplication/:jobId         => (Apply Job)  
GET    /api/jobApplication/               => (View All Job Application)  


# Job IDs For Test

## Active Job
6abcd58ac75929f2dfa1b294  
6abcd5dac75929f2dfa1b295  
6abcd616c75929f2dfa1b296  
6abcd672c75929f2dfa1b297  
6abd2d26c7661e661db6e72a  

## inactive-Job  
6abcd67fc75929f2dfa1b298  
6abcd68ec75929f2dfa1b29a  
