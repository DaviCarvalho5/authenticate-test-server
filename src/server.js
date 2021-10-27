const express = require('express');
const dotenv = require('dotenv').config();

const router = require('./routes.js');

const app = express();
const port = process.env.SERVER_PORT || 5000;

app.use(express.urlencoded());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`>>> Server is running on port ${port}.`);
})