import express from "express";
import 'dotenv/config';
import cors from 'cors';
import connectDB from "./configs/db.js";
import userRouter from "./routes/user.Route.js";
import ownerRouter from "./routes/owner.Routes.js";


// Initialize Express App
const app = express();
await connectDB()

//Middleware
app.use(cors());
app.use(express.json())


// Routes
app.get('/' , (req , res)=>res.send('server is running  '));

app.use('/api/user' , userRouter)
app.use('/api/owner' , ownerRouter)



const PORT = process.env.PORT || 3000 ;

app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`);
    
})