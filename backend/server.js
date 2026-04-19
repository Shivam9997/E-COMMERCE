import express from 'express';
import 'dotenv/config'
import cors from 'cors';


const app = express();
const port = process.env.PORT || 4000;

// MiddleWare
app.use(express.json());
app.use(cors());

// api endpoints

app.get('/', (req,res)=>{
    res.send("API is working fine");
})

app.listen(port,()=> console.log(`localhost:${port}`))

