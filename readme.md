# Scholarship Management System

A full-stack web application for managing scholarship applications, user authentication, and related resources. The project is organized into two main folders: `backend` (Node.js/Express/MongoDB) and `frontend` (React/Vite/Tailwind CSS).

## Features

- User registration and login
- Secure authentication and authorization
- Dashboard for users to view and manage scholarship applications
- Form preview and multi-step registration (Basic, Education, Bank, Important Documents)
- Useful links and resources (Eligibility, Guidelines, How to Apply, FAQ, Documents)
- Responsive UI with modern design

## Tech Stack

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

**Frontend:**
- React
- Vite
- Tailwind CSS

## Folder Structure

```
backend/
  index.js
  package.json
  config/
  controllers/
  middlewares/
  models/
  routes/
frontend/
  UI/
	 src/
		components/
		assets/
		App.jsx
		main.jsx
	 public/
	 package.json
	 tailwind.config.js
	 vite.config.js
```

## Getting Started

### Backend

1. Install dependencies:
	```
	cd backend
	npm install
	```
2. Configure MongoDB connection in `config/db.js`.
3. Start the server:
	```
	npm start
	```

### Frontend

1. Install dependencies:
	```
	cd frontend/UI
	npm install
	```
2. Start the development server:
	```
	npm run dev
	```

## Usage

- Register as a new user and log in.
- Fill out scholarship application forms.
- Access dashboard and useful resources.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
