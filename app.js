const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/db');

// Express middle ware
const app = express();

mongoose.connect(config.database);

// On connect
mongoose.connection.on('connected', () => {
  console.log('Connected to database')
})
// On error
mongoose.connection.on('error', (err) => {
  console.log('Database connection error'+ err);
})

const products = require('./routes/products');

// Cors middleware
app.use(cors());

// Bodyparser Middle ware
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello world');
})

app.use('/products', products);

app.listen(5000, ()=> {
  console.log('server started on port 5000');
})