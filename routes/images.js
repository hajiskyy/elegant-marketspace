const express = require('express');
const router = express.Router();
const config = require('../config/db');
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');

// init girdfs
let gfs;

//init grid stream
var conn = mongoose.createConnection(config.database);
conn.once('open', function () {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('images');
  
});

router.get('/:filename', (req, res) => {
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

module.exports = router;