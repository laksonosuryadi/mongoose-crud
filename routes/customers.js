var express = require('express');
var router = express.Router();
var customersController = require('../controllers/customersController');


/* ADD CUSTOMER */
router.post('/', customersController.addCustomer);

/* SHOW CUSTOMERS */
router.get('/', customersController.showCustomers);

/* DELETE CUSTOMER */
router.delete('/:customerId', customersController.deleteCustomer);

/* UPDATE CUSTOMER */
router.put('/:customerId', customersController.updateCustomer)

module.exports = router;
