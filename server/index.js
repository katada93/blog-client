const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URL =
  'mongodb+srv://katada:qwe123@cluster0.hylxk.mongodb.net/blogServer';

app.use(express.json());
app.use(router);

const start = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log(`Server has been started on port:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
