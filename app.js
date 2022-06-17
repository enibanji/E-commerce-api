require('dotenv').config();
require('express-async-errors')

const express = require('express')
const app = express()

//extra packagas
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')

//data base
const connectDB = require('./db/connect')

//routers
const authRouter = require('./routes/authroutes')
const userRouter = require('./routes/userRoutes')
const productRouter = require('./routes/productRoutes')
const reviewRouter = require('./routes/reviewRoutes')

//error middleware
const errorHandlerMiddleware = require('./middleware/error-handler')
const notFoundMiddleware = require('./middleware/not-found')



app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.use(express.static('./public'));
app.use(fileUpload())

//routes
app.get('/', (req,res) => {
    res.send('hello world')
})
app.get('/api/v1', (req,res)=> {
    console.log(req.signedCookies);
    res.send('hello world')
})
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/reviews', reviewRouter);

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


port= process.env.PORT || 5000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`server is listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
