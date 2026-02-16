import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import profileRoutes from './routes/profileRoutes.js';
dotenv.config();
const app=express();
connectDB();
app.use(cors());
app.use(express.json());
app.use('/api/profile',profileRoutes);
const port=process.env.PORT||5000;
app.listen(port,()=>{
    console.log('server is running on port',port);
})