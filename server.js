const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies

app.use(express.json());

// Middleware to validate signup form data

app.use((req, res, next) => {
  const { username, email, password, dateOfBirth } = req.body;
  if (!username || !email || !password || !dateOfBirth) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if (username.length < 1) {
    return res.status(400).json({ message: "Username cannot be empty" });
  }
  if (email.length < 1) {
    return res.status(400).json({ message: "Email cannot be empty" });
  }
  if (password.length < 8 || password.length > 16) {
    return res
      .status(400)
      .json({ message: "Password must be between 8 and 16 characters long" });
  }
  next();
});

// Signup route handler

app.post("/signup", (req, res) => {
  const { username, email, password, dateOfBirth } = req.body;
  // Create a new user account based on the provided details
  res.status(201).json({ message: "User account created successfully" });
});

// Start the server

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
