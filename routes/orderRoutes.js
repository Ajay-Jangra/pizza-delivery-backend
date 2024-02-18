const express = require('express');
const orderController = require('../controllers/orderController');
const authenticationMiddleware = require('../middleware/authenticationMiddleware');

const router = express.Router();

router.post('/', authenticationMiddleware.authenticateToken, orderController.createOrder);

router.get('/:userId', authenticationMiddleware.authenticateToken, orderController.getOrdersByUserId);
router.patch('/:id/status', authenticationMiddleware.authenticateToken, orderController.updateOrderStatus);
module.exports = router;
