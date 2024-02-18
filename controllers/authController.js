const asyncHandler = require("express-async-handler"); 
const generateToken = require("../config/generateToken");
const User = require('../models/User');
const Cookies = require('js-cookie');


const registerUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if ( !email || !password) {
        res.status(400);
        throw new Error("Please Enter all the Feilds");
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        email,
        password,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            email: user.email,
            token: generateToken(user._id),
        });
        console.log("registration success");

    } else {
        res.status(400);
        throw new Error("User not found");
    }
});



 const loginUser = asyncHandler(async(req, res) => {
     const { email, password } = req.body;

     const user = await User.findOne({ email });

     if (user) {
        
         if (await user.matchPassword(password)) {
             const Token = generateToken(user._id);

             Cookies.set('authToken', Token, { expires: 7, secure: true });

             res.json({
                 _id: user._id,
                 email: user.email,
                 token: Token,
             })

             console.log("login success");
 
         } else {
             res.status(401)
             throw new Error('Invalid password')
         }
     } else {
         res.status(401)
         throw new Error('Invalid Email')
     }
});


module.exports = { loginUser, registerUser };
