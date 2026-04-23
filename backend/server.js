import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';


const app = express();
const port = process.env.PORT || 4000;
connectDB()
connectCloudinary()

// MiddleWare
app.use(express.json());
app.use(cors());

// api endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)




app.get('/', (req,res)=>{
    res.send("API is working fine");
})

app.listen(port,()=> console.log(` server is running for localhost:${port}`))

