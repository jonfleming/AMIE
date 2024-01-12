const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// Handle POST request to `/usermessage` endpoint
app.post('/usermessage', (req, res) => {
  // Extract the message property from the request body
  console.log(`Body: ${JSON.stringify(req.body)}`);

  const { message } = req.body;

  // You can add your logic to handle the message here
  console.log(`Received message: ${message}`);

  // Send a response back to the client
  res.status(200).json({ status: 'Message received successfully', message });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
