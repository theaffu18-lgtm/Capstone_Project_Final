### backend devolopment

1.create git repo
    git init

2.add .gitignore file

3.create .env file fror environment variables & read data from .env with "dotenv"

4.generate package.json
    npm init -y

5.install mongoose

6.connect to database

7.add middleware (body parser,error handler)

8.design schema and create model

9.design rest apis for all resources

###

# ⚙️ Backend - Capstone Project Final

## 🚀 Node.js + Express.js Backend API

Backend server for the MERN Stack Blogging Platform with 🔐 authentication, 👨‍💻 role-based authorization, ☁️ Cloudinary image uploads, and 🍃 MongoDB Atlas integration.

---

# 🌟 Features

- ✅ REST API Architecture
- ✅ JWT Authentication
- ✅ Role-Based Authorization
- ✅ MongoDB Atlas Integration
- ✅ Cloudinary Image Upload
- ✅ Multer File Upload
- ✅ Protected Routes
- ✅ Admin APIs
- ✅ Article Management APIs

---

# 🛠️ Tech Stack

- 🟢 Node.js
- 🚂 Express.js
- 🍃 MongoDB Atlas
- 📦 Mongoose
- 🔐 JWT Authentication
- 🔒 bcryptjs
- 📁 Multer
- ☁️ Cloudinary

---

# 📁 Folder Structure

```bash
backend/
│
├── APIs/
├── middleware/
├── models/
├── services/
├── config/
├── server.js
├── package.json
└── .env
```

---

# ⚙️ Installation

## 📦 Install Dependencies

```bash
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside backend folder.

```env
DB_URL=your_mongodb_connection_string
PORT=4000
JWT_SECRETKEY=your_secret_key
CLOUD_NAME=your_cloudinary_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
```

---

# ▶️ Run Backend Server

```bash
npm start
```

✅ Backend runs on:

```bash
http://localhost:4000
```

---

# 🔐 Authentication Features

- ✅ User Registration
- ✅ User Login
- ✅ Admin Login
- ✅ Password Hashing
- ✅ JWT Token Authentication
- ✅ Role-Based Access Control

---

# 👥 Roles Supported

## 👤 USER
- Read Articles
- Comment on Articles

## ✍️ AUTHOR
- Create Articles
- Edit Articles
- Delete Articles

## 👑 ADMIN
- Manage Users
- Block / Unblock Users
- View Dashboard Statistics

---

# ☁️ Cloudinary Uploads

- ✅ Profile Picture Upload
- ✅ Article Image Upload
- ✅ Cloud Image Storage
- ✅ Multer Integration

---

# 🔗 API Endpoints

## 👤 User APIs

```bash
POST   /user-api/users
GET    /user-api/articles
PUT    /user-api/articles
GET    /user-api/article/:id
```

---

## ✍️ Author APIs

```bash
POST   /author-api/article
PUT    /author-api/article
DELETE /author-api/article/:id
```

---

## 👑 Admin APIs

```bash
POST   /admin-api/login
GET    /admin-api/stats
GET    /admin-api/users
PUT    /admin-api/block/:userId
PUT    /admin-api/unblock/:userId
```

---

# 🔒 Security Features

- ✅ JWT Authentication
- ✅ Password Encryption
- ✅ Protected Routes
- ✅ Role Authorization
- ✅ Environment Variables Protection

---

# ☁️ Deployment

## 🚀 Deploy Backend on Render

### 📂 Root Directory

```bash
backend
```

### 📦 Build Command

```bash
npm install
```

### ▶️ Start Command

```bash
npm start
```

---

# 🍃 Database

- ✅ MongoDB Atlas
- ✅ Mongoose ODM
- ✅ Cloud Database Integration

---

# 🔥 Future Improvements

- 🔔 Notifications
- 📊 Advanced Analytics
- 🔍 Search API
- ❤️ Like System
- 💬 Real-time Chat
- 🤖 AI Features

---

# 👨‍💻 Developed By

## ❤️ Mohammad Afthab

- 🎓 CSE Student
- 💻 MERN Stack Developer
- 🚀 Passionate About Full Stack Development
