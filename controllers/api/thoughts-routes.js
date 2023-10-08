const router = require("../models/api");

// Define GET route to fetch all thoughts
router.get('/api/thoughts', (req, res) => {
    res.json(thoughts);
  });
  
  // Define GET route to fetch a single thought by its _id
  routerget('/api/thoughts/:id', (req, res) => {
    const thoughtId = req.params.id;
    // Find the thought by _id and respond with thought data
    const thought = thoughts.find((thought) => thought.id === thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(thought);
  });
  
  // Define POST route to create a new thought
  router.post('/api/thoughts', (req, res) => {
    const { thoughtText, username, userId } = req.body;
    if (!thoughtText || !username || !userId) {
      return res.status(400).json({ message: 'ThoughtText, username, and userId are required' });
    }
    const newThought = {
      id: Date.now().toString(), // Generate a unique ID (in practice, use a proper ID generator)
      thoughtText,
      username,
      userId,
    };
    thoughts.push(newThought);
  
    // Push the created thought's _id to the associated user's thoughts array field (assuming you have access to user data)
    // For simplicity, we'll simulate this by adding the thought ID to an array within the same thought object
    const userThoughtsIndex = thoughts.findIndex((thought) => thought.userId === userId);
    if (userThoughtsIndex !== -1) {
      thoughts[userThoughtsIndex].userThoughts.push(newThought.id);
    }
  
    res.status(201).json(newThought);
  });
  
  // Define PUT route to update a thought by its _id
  router.put('/api/thoughts/:id', (req, res) => {
    const thoughtId = req.params.id;
    const { thoughtText } = req.body;
    // Find the thought by _id
    const thoughtIndex = thoughts.findIndex((thought) => thought.id === thoughtId);
    if (thoughtIndex === -1) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    // Update the thought's data
    thoughts[thoughtIndex].thoughtText = thoughtText || thoughts[thoughtIndex].thoughtText;
    res.json(thoughts[thoughtIndex]);
  });
  
  // Define DELETE route to remove a thought by its _id
 router.delete('/api/thoughts/:id', (req, res) => {
    const thoughtId = req.params.id;
    // Find the thought by _id
    const thoughtIndex = thoughts.findIndex((thought) => thought.id === thoughtId);
    if (thoughtIndex === -1) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    // Remove the thought from the array
    thoughts.splice(thoughtIndex, 1);
    res.status(204).send();
  });
  
  // Start the server
  router.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });