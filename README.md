## Profile Management System

A full-stack Profile Management System built as part of the Gidy company assignment.

This application allows users to manage their profile, skills, endorsements, and social links with a clean and scalable architecture.

## Features

Create and update profile information

Endorse skills (dynamic endorsement counter)

Add and remove social media links

Light / Dark theme toggle

<img width="555" height="720" alt="image" src="https://github.com/user-attachments/assets/52ac06b2-b103-4f1e-90d1-d34352ee8048" />
<img width="567" height="713" alt="image" src="https://github.com/user-attachments/assets/4a8c3968-1625-4734-a5d6-9c2b84b9f445" />



Clean modular backend architecture

🛠 Tech Stack
🔹 Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

dotenv

CORS

🔹 Frontend

React.js

Axios

CSS

📁 Folder Structure
project-root/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md

## ⚙️ Setup Instructions (Run Locally)
1️⃣ Clone the Repository
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name

2️⃣ Setup Backend
cd backend
npm install


Create a .env file inside the backend folder and add:

MONGO_URI=your_mongodb_connection_string
PORT=5000


## Start the backend server:

npm run dev


## Server will run at:

http://localhost:5000

## 3️⃣ Setup Frontend
cd frontend
npm install
npm start

## Frontend will run at:

http://localhost:3000

## Innovation Highlight
🔥 Dynamic Skill Endorsement System

This project goes beyond a basic CRUD profile system by implementing:

Real-time skill endorsement counter updates

Modular schema design for scalability

Separate sub-schemas for skills and social links

Clean controller-based backend structure

Theme switching functionality

The architecture is:

Scalable

Maintainable

Production-ready

Easy to extend with authentication and additional features

## Security

Sensitive credentials (like MongoDB URI) are stored in environment variables

.env files are excluded using .gitignore

No secrets are committed to GitHub

## 🌍 Deployment

You can deploy:

Backend:

Render

Railway

Frontend:

Vercel


## Author

Gopi Palleboina
