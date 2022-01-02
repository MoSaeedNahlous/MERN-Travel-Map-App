const router = require('express').Router();
const Pin = require('../models/Pin')


//Create a new Pin

router.post("/", async (req, res) => {
    const newPin = new Pin(req.body);
    try {
        const savedPin = await newPin.save();
        res.status(200).json(savedPin);
    } catch (error) {
        res.status(500).json(error)
    }
})

//Get all Pins

router.get("/", async (req, res) => {
    const allPins = await Pin.find({});
    try {
        res.status(200).json(allPins);
    } catch (error) {
        res.status(500).json(error)
    }
})



module.exports = router