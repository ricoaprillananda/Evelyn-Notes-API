const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const chalk = require('chalk');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const noteRoutes = require('./routes/notes');
app.use('/api/notes', noteRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('🐈‍⬛ Welcome to the Evelyn Notes API!');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log(chalk.green('🍃 Connected to MongoDB'));
    app.listen(process.env.PORT || 5000, () => {
      console.log(chalk.cyanBright(`🖤 Server running at http://localhost:${process.env.PORT || 5000}`));
    });
  })
  .catch((err) => {
    console.error(chalk.red('👾 MongoDB connection failed:'), err.message);
  });
