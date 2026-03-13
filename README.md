# Authentication System (Node.js + JWT + OTP)

A secure Authentication API built with Node.js and Express that provides user registration, OTP verification, login, and protected routes using JWT authentication.
This project demonstrates how modern backend systems manage user authentication, authorization, and security.

### Features
1. User Registration
2. OTP Verification
3. Secure Login System
4. JWT Token Authentication
5. Protected Routes
6. Middleware-based Authentication
7. Role-based Access Control (Free / Basic / Premium)
8. Error Handling
9. RESTful API Architecture

### Tech Stack
1. Backend  
   (i) Node.js  
   (ii) Express.js  
   (iii) Prisma  
3. Authentication  
   (i) JSON Web Token (JWT)  
   (ii) OTP Verification  
4. Database  
   (i) SQL  
5. Other Tools  
   (i) Nodemailer (for OTP emails)  
   (ii) dotenv  
   (iii) bcrypt (password hashing)  

### Project Structure
Authentication  
├── controllers  
│   └── authController.js  
│   └── otpController.js  
├── middleware  
│   └── authMiddleware.js  
├── routes  
│   └── authRoutes.js  
│   └── movieRoutes.js  
├── models  
│   └── userModel.js  
├── config  
│   └── db.js  
├── server.js  
├── package.json  
├── .gitignore  
└── README.md  

### Installation
Clone the repository  
`git clone https://github.com/hrithik41/Authentication.git`  
Go to project folder  
`cd Authentication`  
Install dependencies  
`npm install`  

### Environment Variables
Create a .env file in the root directory.  
Example:  
`PORT=3000  
JWT_SECRET=your_jwt_secret  
EMAIL_USER=your_email  
EMAIL_PASS=your_email_password  
DB_URI=your_database_url`  

### Run the Server
Development mode  
`npm run dev`  

### Author
**Hrithik Virendra Mishra**  
**Full Stack Developer**  

###GitHub
+ https://github.com/hrithik41



