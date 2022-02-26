const express = require('express');

const app = express();

// Import route
const professionalRoutes = require('./routes/professional');

// Add CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

app.use('/professional', professionalRoutes);

app.listen(8080);