const asyncHandler = require("express-async-handler");
const restaurants = require('../models/Restaurant');


exports.registerRestaurant = asyncHandler(async (req, res) => {
    const { name, menu } = req.body;
     console.log("hello i am called");
    try {
        const restaurant = await restaurants.create({ name, menu });
        res.json({ restaurant });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

exports.getMenu = asyncHandler((req, res) => {
    const restaurantId = parseInt(req.params.id);
    const restaurant = restaurants.find(r => r.id === restaurantId);

    if (!restaurant) {
        return res.status(404).json({ message: 'Restaurant not found' });
    }

    res.json({ restaurantName: restaurant.name, menu: restaurant.menu });
});
