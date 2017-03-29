var express = require('express');
var router = express.Router();
var transactionsController = require('../controllers/transactionsController');

/* ADD TRANSACTION */
router.post('/', transactionsController.addTransaction);

/* SHOW TRANASACTIONS */
router.get('/', transactionsController.showTransactions)

module.exports = router;
