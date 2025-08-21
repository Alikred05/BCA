import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mondodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRout.js';

//app config

const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middlewares

app.use(express.json())
app.use(cors())

//api endpoints
app.use('/api/admin',adminRouter)


app.get('/',(req,res)=>{
    res.send('Hello World my friend')
})

app.listen(port,()=> console.log("server Started",port))