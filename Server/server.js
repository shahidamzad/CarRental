import express from "express";
import 'dotenv/config';
import cors from 'cors';
import connectDB from "./configs/db.js";


// Initialize Express App
const app = express();
await connectDB()

//Middleware
app.use(cors());
app.use(express.json())


app.get('/' , (req , res)=>res.send('server is running  '))

const PORT = process.env.PORT || 3000 ;

app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`);
    
})