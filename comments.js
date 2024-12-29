// Create web server
// Listen on port 3000
// Handle requests to /comments
// Create new comment
// Respond with success message
// Respond with all comments

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let comments = [];

app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.json({ success: true });
});

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});