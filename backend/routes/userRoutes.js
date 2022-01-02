const router = require('express').Router();
const User = require('../models/User')
const bcryptjs = require('bcryptjs')


//Register
router.post('/register', async (req, res) => {
    try {
        //hashing password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(req.body.password, salt);

        //creating new user
        const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
            email:req.body.email,
        })

        const registeredUser = await newUser.save();
        res.status(200).json(registeredUser._id);
    } catch (error) {
        res.status(400).json(error)
    }
})


//Login
router.post('/login', async (req, res) => {
    try {

        const user = await User.findOne({ username: req.body.username })
        if (!user) {
            !user && res.status(400).json("Wrong username or password!")
            return
        }
        
        const validPassword = await bcryptjs.compare(req.body.password, user.password)
        if (!validPassword) {
            !validPassword && res.status(400).json("Wrong username or password!")
            return
        }
        
        res.status(200).json({_id:user._id,username:user.username})
            
    } catch (error) {
        console.log(error)
    }
})




module.exports = router