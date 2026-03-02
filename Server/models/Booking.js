import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const bookingSchema = new mongoose.Schema({
    car : {type:ObjectId , ref : "car", required : true },
    user: {type:ObjectId , ref : "User", required : true },
    owner : { type : ObjectId , ref : "User" , required: true },
    pickupDate : {type: Date , required : True},
    returnDate : {type: Date , required : True},
    status : {type: string , enum : ["pending" , "confirmed" , " cancelled" ] , default : "pending" },
    price:{ type : Number , required : true} 


},{timestamps  : true})

const Booking = mongoose.model('car', bookingSchema);

export default Booking;