# 🎨 Frontend - Capstone Project Final

## ⚛️ React.js + Vite Frontend

Frontend application for the MERN Stack Blogging Platform with 🔐 authentication, 👨‍💻 role-based dashboards, ☁️ profile image uploads, and 📚 article management.

---

# 🌟 Features

- ✅ Modern Responsive UI
- ✅ User Authentication
- ✅ Role-Based Dashboard
- ✅ Protected Routes
- ✅ Article Management
- ✅ Admin Panel
- ✅ Profile Image Upload
- ✅ Toast Notifications

---

# 🛠️ Tech Stack

- ⚛️ React.js
- ⚡ Vite
- 🌐 Axios
- 🧭 React Router DOM
- 🎨 Tailwind CSS
- 🔔 React Hot Toast

---

# 📁 Folder Structure

```bash
frontend/
│
├── public/
├── src/
│   ├── components/
│   ├── config/
│   ├── styles/
│   ├── assets/
│   └── App.jsx
│
├── vite.config.js
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

Create a `.env` file inside frontend folder.

```env
VITE_API_URL=http://localhost:4000
```

---

# ▶️ Run Frontend

```bash
npm run dev
```

✅ Frontend runs on:

```bash
http://localhost:5173
```

---

# 👥 User Roles

## 👤 USER
- 📖 Read Articles
- 💬 Comment on Articles
- 🖼️ Upload Profile Picture

---

## ✍️ AUTHOR
- ➕ Create Articles
- ✏️ Edit Articles
- ❌ Delete Articles
- 📚 Manage Own Articles

---

## 👑 ADMIN
- 👀 View Users
- 👀 View Authors
- 🚫 Block Users
- ✅ Unblock Users
- 📊 View Dashboard Statistics

---

# 🧭 Routing System

Protected routes based on roles:

```bash
/userdashboard
/authordashboard
/admindashboard
```

---

# 📸 Media Features

- ✅ Profile Picture Upload
- ✅ Article Image Upload
- ✅ Cloudinary Integration
- ✅ Multer Backend Support

---

# 🔗 API Integration

Frontend communicates with backend APIs using Axios.

Example:

```javascript
axios.get(`${import.meta.env.VITE_API_URL}/admin-api/users`)
```

---

# 📚 Main Components

- 🏠 Home
- 🔐 Login
- 📝 Register
- 👤 UserProfile
- ✍️ AuthorProfile
- 👑 AdminProfile
- ➕ AddArticle
- ✏️ EditArticle
- 📖 ArticleDetail
- 🚫 Unauthorized
- 🛡️ ProtectedRoute

---

# 🎨 UI Features

- ✅ Responsive Design
- ✅ Dynamic Rendering
- ✅ Dashboard Navigation
- ✅ Toast Notifications
- ✅ Clean User Interface
- ✅ Interactive Components

---

# ☁️ Deployment

## 🚀 Deploy Frontend on Vercel

### 📂 Root Directory

```bash
frontend
```

### 📦 Build Command

```bash
npm run build
```

### 📁 Output Directory

```bash
dist
```

---

# 🔥 Future Improvements

- 🌙 Dark Mode
- 🔍 Search Functionality
- ❤️ Like System
- 🔖 Bookmark Feature
- 🔔 Notifications
- 💬 Real-time Chat
- 🤖 AI Content Suggestions

---

# 👨‍💻 Developed By

## ❤️ Mohammad Afthab

- 🎓 CSE Student
- 💻 MERN Stack Developer
- 🚀 Passionate About Frontend Development
