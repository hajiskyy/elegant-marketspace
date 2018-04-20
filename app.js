const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/db');


// routes
const products = require('./routes/products');
const brands = require('./routes/brands');
const users = require('./routes/users');

// Express middle ware
const app = express();

mongoose.connect(config.database);



// On connect
mongoose.connection.on('connected', () => {;
  console.log('Connected to database');

})
// On error
mongoose.connection.on('error', (err) => {
  console.log('Database connection error'+ err);
})




// Cors middleware
app.use(cors());

// Bodyparser Middle ware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.get('/', (req, res) => {
  res.send('Hello world');
})

// products route
app.use('/products', products);

// brands route
app.use('/brand', brands)

// users route
app.use('/user', users);



app.listen(5000, ()=> {
  console.log('server started on port 5000');
})