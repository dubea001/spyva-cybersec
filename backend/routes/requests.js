const express = require('express');
const router = express.Router();
const multer = require('multer');
const Request = require('../models/Request');
const fs = require('fs');


// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Handle request submission
router.post('/', upload.array('images'), async (req, res) => {
  try {
    const { name, email, country, additionalMessage } = req.body;
    const images = req.files.map(file => file.path);

    const request = new Request({
      name,
      email,
      country,
      additionalMessage,
      images
    });

    await request.save();

    res.status(201).json({ message: 'Request submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Fetch all requests
router.get('/', async (req, res) => {
  try {
    const requests = await Request.find();
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});


// Delete a request by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Find the request by ID
    const request = await Request.findById(id);
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }

    // Delete images from the file system
    request.images.forEach(imagePath => {
      fs.unlink(imagePath, (err) => {
        if (err) console.error(`Failed to delete image at ${imagePath}`, err);
      });
    });

    // Delete the request from the database
    await Request.findByIdAndDelete(id);

    res.status(200).json({ message: 'Request deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});


module.exports = router;