const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
const AWS_REGION = process.env.AWS_REGION || 'local';

app.get('/', (req, res) => {
  res.send(`Hello from ${AWS_REGION}!`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`AWS Region: ${AWS_REGION}`);
});
