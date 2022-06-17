require('dotenv').config();
require('express-async-errors')

const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('hello world')
})


port= process.env.PORT || 5000
const start = async () => {
    try {
        
        app.listen(port, () => {
            console.log(`server is listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()