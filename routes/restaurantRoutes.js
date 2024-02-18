const express = require('express');
const restaurantController = require('../controllers/restaurantController');
const authenticationMiddleware = require('../middleware/authenticationMiddleware');

const router = express.Router();


router.post('/', authenticationMiddleware.authenticateToken, restaurantController.registerRestaurant);
router.get('/:id/menu', authenticationMiddleware.authenticateToken, restaurantController.getMenu);

module.exports = router;
