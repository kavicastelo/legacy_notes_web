# Legacy Notes Project Documentation

## Overview

The **Legacy Notes** project is a comprehensive system designed to handle personal notes securely. It includes features
such
as authentication, private note management, image, video, and audio handling, as well as an attendance tracking system.
The project incorporates various technologies and security measures to ensure data integrity and user privacy.

## Technologies Used

- Frontend:
    - Angular for the user interface.
    - Firebase Storage for storing images, videos, and audios.
    - Netlify for hosting the frontend application.

- Backend:
    - Node.js and Express.js for server-side scripting.
    - MongoDB Atlas as the database for managing user data and notes.
    - JSON Web Tokens (JWT) for user authentication and authorization.
    - Bcrypt for password hashing and security.
    - Firebase Storage for managing media files and folder locks.
    - Render for hosting the backend server.

## Features

1. **Authentication:**
    - Users can register, log in, and log out securely.
    - JWT tokens are used for secure authentication.
2. **Note Management:**
    - Users can create, read, update, and delete private notes.
    - Notes are stored in a MongoDB Atlas database for data persistence.
3. **Media Handling:**
    - Users can upload and manage images, videos, and audios.
    - Firebase Storage is used to store media files securely.
    - Folder locks are implemented for added security.
4. **Attendance Tracking:**
    - Users can mark their attendance by checking the "I'm alive" checkbox.
    - Automated reminders are sent to users if they haven't marked attendance in 3 days.
    - If there is no response after the reminder, an email is sent to a designated believer.

## Security Measures

- Data Encryption:
    - Bcrypt is used for password hashing before storing in the database.
    - Media files are stored securely in Firebase Storage.

- Authorization:
    - JWT tokens are used to authenticate and authorize users.
    - Folder locks ensure media files are accessible only to authorized users.

## Deployment

- Frontend:
    - The Angular frontend is hosted on Netlify for easy accessibility.
- Backend:
    - The Node.js backend is hosted on Render for server-side operations.
    - MongoDB Atlas is used as the backend database.

## How to Run Locally

1. Clone the repository:
   ```
   git clone <repository-url>
   cd legacy-notes
   ```
2. Install dependencies for frontend and backend:
   ```
   cd client
   npm install
   cd ../api
   npm install
   ```
3. Configure environment variables for backend:
    - Create a `.env` file in the backend directory and add necessary variables.

4. Run the frontend and backend locally:
   ```
   cd client
   ng serve
   cd ../api
   npm start
   ```

5. Access the application at `http://localhost:4200`.

## Conclusion

The **Legacy Notes** project provides a secure and user-friendly platform for managing personal notes and media files. Its
robust authentication, data encryption, and automated attendance tracking features make it a reliable solution for users
seeking a private and organized digital space.