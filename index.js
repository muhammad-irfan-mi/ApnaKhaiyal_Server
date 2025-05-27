const express = require('express')
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const cookieParser = require('cookie-parser');
const cors = require('cors')

dotenv.config()
const app = express()
connectDB(process.env.MONGO_URL)

app.use(cors({
    origin: (origin, callback) => {
        callback(null, true);
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type, Accept, Authorization",
    credentials: true
}));

app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.send('Hello from Apna Khaiyal Server')
})

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/user', require('./routes/user.routes'))
app.use('/api/town', require('./routes/town.routes'))



app.listen(process.env.PORT, () => {
    console.log(`Server Started at PORT: ${process.env.PORT}`)
})
