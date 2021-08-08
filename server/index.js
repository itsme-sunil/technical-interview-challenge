const express = require('express');
const app = express();
const path = require('path');
const PORT = 3004;
const cors = require('cors');

app.use(express.static('../images'));
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.info(`Listening on port ${PORT}...`);
})