# MERN Blog Website

## 🌐 Live Demo
[Visit the Blog](https://blog-web-0231.vercel.app/)

## 📌 About the Project
This is a **MERN stack** blog website where users can read and explore various blog posts. It is built using **MongoDB, Express.js, React.js, and Node.js**. The project follows modern web development practices and includes features like authentication, blog management, and user-friendly UI.

## 🚀 Features
- 📝 **Create, Read, Update, Delete (CRUD)** functionality for blogs.
- 🔐 **User Authentication** (Login/Register).
- 📸 **Upload images for blog posts**.
- 📱 **Fully responsive design** for all devices.

## 🛠️ Tech Stack
- **Frontend:** React.js, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Token)
- **Deployment:** Vercel (Frontend), Render (Backend)

## 📂 Folder Structure
```
mern-blog/
├── client/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.js
│   │   ├── index.js
│   ├── public/
│   ├── vite.config.js
│   ├── package.json
│
├── server/          # Node.js + Express backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   ├── package.json
│
├── .gitignore
├── README.md
```

## 🔧 Installation & Setup
1. **Clone the Repository**
```sh
git clone https://github.com/yourusername/mern-blog.git
cd mern-blog
```
2. **Backend Setup**
```sh
cd server
npm install
npm start
```
3. **Frontend Setup**
```sh
cd client
npm install
npm run dev
```
4. **Environment Variables (`.env` file in `server/`)**
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## 🛠 Deployment
- **Frontend**: Deployed on **Vercel**.
- **Backend**: Deployed on **Render / Railway / Heroku**.

## 📜 License
This project is licensed under the MIT License.

## ✨ Contributing
Feel free to **fork** the repository and submit a **pull request** if you have improvements or bug fixes!

## 📩 Contact
For any queries or collaborations, feel free to reach out at [aryankashyap03873@gmail.com](mailto:aryankashyap03873@gmail.com).

