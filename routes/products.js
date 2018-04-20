const express = require('express');
const router = express.Router();
const path = require('path');
const config = require('../config/db');
const mongoose = require('mongoose');
const product = require('../models/Products');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');


// init girdfs
let gfs;

//init grid stream
var conn = mongoose.createConnection(config.database);
conn.once('open', function () {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('images');
})

// create storage engine
const storage = new GridFsStorage({
  url: config.database,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'images'
        };
        resolve(fileInfo);
      });
    });
  }
});

const upload = multer({ storage });

router.post('/addprodimg',upload.single('file'),(req, res, next)=> {
   res.json({file: req.file});
})

router.get('/image/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if(!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }
    // Check if image
    if(file.contentType === 'image/jpeg' || file.contentType === 'image/jpg' || file.contentType === 'image/png') {
      // Read Output to browser
      const readStream = gfs.createReadStream(file.filename);
      readStream.pipe(res);
    } else {
      res.status(404).json({
        err: 'Not an Image'
      });
    }
  });
});

// Add Products 
router.post('/addproduct',upload.single('file'),(req, res, next) => {
  let newProduct = new product ({
    name: req.body.name,
    description:req.body.description,
    category: req.body.category,
    price: req.body.price,
    brand: req.body.brand,
    imageUrl: "http://localhost:5000/products/image/"+req.file.filename,
    availability: req.body.availability,
    discount: req.body.discount
  });

  product.addProduct(newProduct, (err, prod) =>{
    if(err) {
      res.send({success: false, msg: 'Failed to register'});
    } else {
      res.send({success: true, msg: 'Product added'})
    }
  });
});

// Get products
router.get('/getproducts',(req, res) => {
  product.getProducts((err, products) => {
    if(err) throw err;
    res.json({success: true,products});
  })
})

module.exports = router;