const express = require('express');
const authRoutes = require('./routes/authRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const orderRoutes = require('./routes/orderRoutes');
 
const connectDB = require("./config/db");
const dotenv = require("dotenv");

// connect db
dotenv.config();
connectDB();

console.log(process.env.PORT);
const PORT = process.env.PORT || 3000;
const app = express();

// middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/orders', orderRoutes);

// publice routes 
app.get('/', (req, res) => {
    res.json({ message: 'This is a public route' });
});



// server
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log('Listening on port ' + PORT);
})
