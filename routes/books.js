var express = require('express');
var router = express.Router();
var booksController = require('../controllers/booksController');

/* ADD BOOK */
router.post('/', booksController.addBook);

/* SHOW BOOKS */
router.get('/', booksController.showBooks);

/* DELETE BOOK */
router.delete('/:bookId', booksController.deleteBook);

/* UPDATE BOOK */
router.put('/:bookId', booksController.updateBook);

module.exports = router;
