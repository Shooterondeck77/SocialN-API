const router = require('express').Router();
const { user } = require('..');

router.get('/api/users', (req, res) => {
  res.json(user);
});

// Define GET route to fetch a single user by its _id
router.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  // Find the user by _id and respond with user data
  const user = users.find((user) => user.id === userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

// Define POST route to create a new user
router.post('/api/users', (req, res) => {
  const { username, email } = req.body;
  if (!username || !email) {
    return res.status(400).json({ message: 'Username and email are required' });
  }
  const newUser = {
    id: Date.now().toString(), // Generate a unique ID (in practice, use a proper ID generator)
    username,
    email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Define PUT route to update a user by its _id
router.put('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  const { username, email } = req.body;
  // Find the user by _id
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  // Update the user's data
  users[userIndex].username = username || users[userIndex].username;
  users[userIndex].email = email || users[userIndex].email;
  res.json(users[userIndex]);
});

// Define DELETE route to remove a user by its _id
router.delete('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  // Find the user by _id
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  // Remove the user from the array
  users.splice(userIndex, 1);
  res.status(204).send();
});

// Start the server
router.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
