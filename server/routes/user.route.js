const express = require('express');
const { User } = require("../models/User.model"); 
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post("/signup", async (req, res) => {
    const { name, country, date, email, password } = req.body;
    const hashed_password = bcrypt.hashSync(password, 8);
    const new_user = new User({
        name,
        country,
        date,
        email,
        password: hashed_password,
    });
    await new_user.save();
    res.send({msg:"Signup successful"});
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) {
        res.send({msg:"User not found. Please sign up."});
        return;
    }

    const correct_password = bcrypt.compareSync(password, user.password);
    if (correct_password) {
        const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET);
        res.json({ msg: "Login successful", token: token });
    } else {
        res.send({msg:"Login failed"});
    }
});

module.exports = router;
