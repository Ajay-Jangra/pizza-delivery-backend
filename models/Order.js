const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    items: [{ type: String }],
    status: { type: String, enum: ['pending', 'preparing', 'ready', 'delivered'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
