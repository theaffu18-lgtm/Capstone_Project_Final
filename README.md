Main Project README
Capstone Project Final

A full-stack blogging platform with role-based authentication and authorization built using the MERN stack.

The application supports:

User registration and login
Author article publishing
Admin dashboard management
Role-based protected routes
Cloudinary image uploads
MongoDB Atlas database
JWT authentication
Responsive frontend UI
Tech Stack
Frontend
React.js
Vite
Axios
React Router DOM
Tailwind CSS
React Hot Toast
Backend
Node.js
Express.js
MongoDB Atlas
Mongoose
JWT Authentication
Multer
Cloudinary
bcryptjs
Project Structure
blog_app/
│
├── backend/
│   ├── APIs/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── services/
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── .env
│   ├── vite.config.js
│   └── package.json
│
└── README.md
Features
Authentication
User Login
User Registration
JWT Authentication
Protected Routes
Role-Based Access
User Features
View Articles
Comment on Articles
Profile Management
Author Features
Create Articles
Edit Articles
Delete Articles
Manage Own Content
Admin Features
View Users
View Authors
Block Users
Unblock Users
Dashboard Statistics
Media Upload
Cloudinary Image Uploads
Profile Picture Upload
Article Thumbnail Upload
Environment Variables
Backend .env
DB_URL=your_mongodb_connection_string
PORT=4000
JWT_SECRETKEY=your_secret_key
CLOUD_NAME=your_cloudinary_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
Frontend .env
VITE_API_URL=http://localhost:4000
Installation
Clone Repository
git clone https://github.com/your-username/Capstone_Project_Final.git
Backend Setup
cd backend
npm install
npm start

Backend runs on:

http://localhost:4000
Frontend Setup
cd frontend
npm install
npm run dev

Frontend runs on:

http://localhost:5173
Deployment
Frontend Deployment
Platform: Vercel
Backend Deployment
Platform: Render
Database
MongoDB Atlas
API Endpoints
User Routes
POST   /user-api/users
GET    /user-api/articles
PUT    /user-api/articles
GET    /user-api/article/:id
Author Routes
POST   /author-api/article
PUT    /author-api/article
DELETE /author-api/article/:id
Admin Routes
POST   /admin-api/login
GET    /admin-api/stats
GET    /admin-api/users
PUT    /admin-api/block/:userId
PUT    /admin-api/unblock/:userId
Future Improvements
Dark Mode
Notifications
Real-Time Chat
Search & Filtering
Like & Bookmark System
AI Content Suggestions
Author

Developed by Mohammad Afthab
