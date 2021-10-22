const express = require('express');
const mongoose = require('mongoose');
const { config } = require('dotenv');

const router = require('./routes');

config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(router);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    app.listen(PORT, () => {
      console.log(`Server has been started on port:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
