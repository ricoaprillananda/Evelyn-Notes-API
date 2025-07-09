const express = require('express');
const router = express.Router();
const {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote
} = require('../controllers/noteController');

router.post('/', createNote);         // POST /api/notes
router.get('/', getAllNotes);         // GET /api/notes
router.get('/:id', getNoteById);      // GET /api/notes/:id
router.put('/:id', updateNote);       // PUT /api/notes/:id
router.delete('/:id', deleteNote);    // DELETE /api/notes/:id

module.exports = router;
