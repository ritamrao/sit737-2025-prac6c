const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('SIT737 Credit Task 6.2C - Part 2');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});