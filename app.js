const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/db');
const path = require('path');


// routes
const products = require('./routes/products');
const brands = require('./routes/brands');
const users = require('./routes/users');
const images = require('./routes/images');
const orders = require('./routes/orders');
const ratings = require('./routes/ratings');

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


// port
const port = process.env.PORT || 8080;

// Cors middleware
app.use(cors());

// Bodyparser Middle ware
// app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));


// products route
app.use('/products', products);

// brands route
app.use('/brand', brands);

// users route
app.use('/user', users);

// images route
app.use('/image', images);

// orders route
app.use('/order', orders);

// ratings router
app.use('/rating', ratings);

app.get('/', (req, res) => {
  res.send('invalid endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});



app.listen(port, ()=> {
  console.log('server started on port ',port);
})