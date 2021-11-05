const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const { config } = require('dotenv');

const router = require('./routes');

config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

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
