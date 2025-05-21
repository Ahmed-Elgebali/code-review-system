# Code Review System

## 🚀 Overview
Code Review System is a backend-powered platform that enables developers to submit their code for review, receive feedback, and improve their coding practices. Built using **Node.js, Express, and MongoDB**, it ensures seamless authentication and efficient code evaluation.

## ✨ Features
- **User Authentication**: Supports JWT-based authentication and Google OAuth.
- **Role-Based Access Control**: Users can be reviewers or developers.
- **Code Submission**: Developers can submit their code for review.
- **Review System**: Reviewers can provide feedback and rate code quality.
- **Secure & Scalable**: Built with best security practices in mind.

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT, Passport.js (Google OAuth)
- **Validation**: Joi

## 🔧 Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/code-review-system.git
   cd code-review-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in `.env`:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

4. Start the server:
   ```bash
   npm start
   ```

## 🔍 API Endpoints
### REST Endpoints
- **User Authentication**:
  - `POST /auth/register` - Register a new user
  - `POST /auth/login` - Login with email and password
  - `GET /auth/google` - Authenticate using Google OAuth

- **Code Reviews**:
  - `POST /reviews/submit` - Submit code for review
  - `GET /reviews/:id` - Get review details
  - `POST /reviews/:id/feedback` - Provide feedback on code

## 🔮 Future Enhancements
- Add **AI-powered code analysis**.
- Implement **real-time notifications** for code feedback.

## 📜 License
This project is licensed under the MIT License.

## 🤝 Contributing
Contributions are welcome! Feel free to fork the repo and submit pull requests.

## 📧 Contact
For any inquiries, reach out to ahmedelgebalics@gmail.com or open an issue on GitHub.

---
Made with ❤️ by Ahmed Elgebali

