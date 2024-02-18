const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Order = require('../models/Order');

// Route to get analytics data
router.get('/analytics', async (req, res) => {
    try {
        const userCountsByState = await User.aggregate([
            { $group: { _id: '$address.state', count: { $sum: 1 } } }
        ]);

        const orderCountsByType = await Order.aggregate([
            { $group: { _id: '$orderType', count: { $sum: 1 } } }
        ]);

        res.json({ userCountsByState, orderCountsByType });
    } catch (err) {
        console.error(err);
    }
});

// return the state from where max order place of particular type 
//  TYPE = corn, veg , non-veg , salad , etc 

router.get('/TYPEOfPizza-state', async (req, res) => {
    try {
        const maxTYPEPizzaState = await Order.aggregate([
            { $match: { products: 'type pizza' } },
            { $group: { _id: '$userId', count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 1 }
        ]);

        if (maxTYPEPizzaState.length === 0) {
            res.status(404).json({ message: 'No TYPE pizza orders found' });
            return;
        }

        // Assuming the user object has the address field
        const state = maxTYPEPizzaState[0]._id.address.state;
        res.json({ state });

    } catch (err) {
        console.error(err);
    }
});


// item sell most on particullar date 
router.get('/most-sold-item-on-date/:date', async (req, res) => {
    try {
        const date = new Date(req.params.date);

        const mostSoldItem = await Order.aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
                        $lt: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
                    }
                }
            },
            { $unwind: '$products' },
            {
                $group: {
                    _id: '$products',
                    count: { $sum: 1 }
                }
            },
            { $sort: { count: -1 } },
            { $limit: 1 }
        ]);

        if (mostSoldItem.length === 0) {
            res.status(404).json({ message: 'No orders found for the specified date' });
            return;
        }

        res.json({ mostSoldItem: mostSoldItem[0]._id });
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;