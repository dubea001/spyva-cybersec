const express = require('express');
const router = express.Router();
const GeneratedId = require('../models/GeneratedId');

// Function to generate a random 16-character ID with hyphens
function generateId() {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    if ((i + 1) % 4 === 0 && i < 15) {
      result += '-';
    }
  }
  return result;
}

// Generate a new ID
router.post('/generate', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const newId = generateId();
    const generatedId = new GeneratedId({ id: newId, email });
    await generatedId.save();
    res.json({ id: newId, email });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all IDs
router.get('/', async (req, res) => {
  try {
    const ids = await GeneratedId.find();
    res.json(ids);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete an ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedId = await GeneratedId.findOneAndDelete({ id });

    if (!deletedId) {
      return res.status(404).json({ message: 'ID not found' });
    }

    res.json({ message: 'ID deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update email for an existing ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const updatedId = await GeneratedId.findOneAndUpdate(
      { id },
      { email },
      { new: true }
    );

    if (!updatedId) {
      return res.status(404).json({ message: 'ID not found' });
    }

    res.json({ id: updatedId.id, email: updatedId.email });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
