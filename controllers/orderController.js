const Order = require('../models/Order');

// Create new order
exports.createOrder = async (req, res) => {
    const { userId, restaurantId, items } = req.body;
    try {
        const order = await Order.create({ userId, restaurantId, items });
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get orders by user ID
exports.getOrdersByUserId = async (req, res) => {
    const userId = req.params.userId;
    try {
        const orders = await Order.find({ userId });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update order status by admin
exports.updateOrderStatus = async (req, res) => {
    const orderId = req.params.id;
    const { status } = req.body;
    try {
        const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

 
