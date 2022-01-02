const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const pinRouter = require('./routes/pinRoutes')
const userRouter = require('./routes/userRoutes')

const app = express();
dotenv.config();

app.use(express.json())


app.use('/api/users', userRouter);
app.use('/api/pins', pinRouter);





mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }).then(() => {
    console.log("MongoDB Connected!")
}).catch((err) => {
    console.log(err)
})

app.listen(8800, () => {
    console.log("Server is running!")
})

