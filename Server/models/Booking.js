import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const bookingSchema = new mongoose.Schema({
    car: { type: ObjectId, ref: "Car", required: true },
    user: { type: ObjectId, ref: "User", required: true },
    owner: { type: ObjectId, ref: "User", required: true },
     brand: { type: String, required: true },
    model: { type: String, required: true },
    image: { type: String, required: true },
    year: { type: Number, required: true },
    category: { type: String, required: true },
    seating_capacity: { type: Number, required: true },
    fuel_type: { type: String, required: true },
    transmission: { type: String, required: true },
    location: { type: String, required: true },
    pricePerDay: { type: Number, required: true },
    description: { type: String, required: true },
    isAvaliable: { type: Boolean, default: true },

    // pickupDate: { type: Date, required: true },
    // returnDate: { type: Date, required: true },

    status: {
        type: String,
        enum: ["Pending", "Confirmed", "Cancelled"],
        default: "Pending"
    },

    // price: { type: Number, required: true }


}, { timestamps: true })

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;