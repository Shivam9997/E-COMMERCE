import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import connectDB from './config/mongodb.js'


const app = express();
const port = process.env.PORT || 4000;
connectDB()

// MiddleWare
app.use(express.json());
app.use(cors());

// api endpoints

app.get('/', (req,res)=>{
    res.send("API is working fine");
})

app.listen(port,()=> console.log(` server is running for localhost:${port}`))

