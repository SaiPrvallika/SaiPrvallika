const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
app.use(bodyParser.json());
app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;
  console.log('New registration:', { username, email, password });
  res.json({ message: 'Registration successful' });
});
app.listen(PORT, () => {
  console.log("Server is running on port ",{PORT});
});