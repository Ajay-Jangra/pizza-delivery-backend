const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET;  
const Cookies =  require('js-cookie');

const authenticateToken = (req, res, next) => {
    
    const token = Cookies.get('token');
    // console.log(token);

    if (!token) {
        return res.status(401).json({ message: 'Authentication token is missing' });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        req.user = user;
        next();
    });
};


module.exports = { authenticateToken };