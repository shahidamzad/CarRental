import { json } from "express";
import User from "../models/User.js";

import fs from 'fs'
import { imagekit } from "../configs/imageKit.js";
import Car from "../models/Car.js";
import Booking from "../models/Booking.js";



// api to change role of user

export const changeRoleToOwner = async (req, res) => {

    try {
        const { _id } = req.user;

        await User.findByIdAndUpdate(_id, { role: "owner" })
        res.json({ success: true, message: "Now you can list cars " })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });

    }

}
// api to list car
export const addCar = async (req, res) => {
    try {
        const { _id } = req.user;

        let car = JSON.parse(req.body.carData);

        const imageFile = req.file;

        // Uploads image to imagekit
        const fileBuffer = fs.readFileSync(imageFile.path)

        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/cars"
        })

        // optimization through URL transformation 

        var optimizedImageURL = imagekit.url({
            path: response.filePath,
            transformation: [
                { "width": "1280" },
                { quality: "auto" },
                { format: "webp" }
            ]
        })

        const image = optimizedImageURL;

        await Car.create({ ...car, owner: _id, image })

        res.json({ success: true, message: "Car Added" })



    } catch (error) {
        return res.status(500).json({
            message: error.message
        });

    }
}
// api list to get all  owner cars
export const getOwnerCars = async (req, res) => {
    try {
        const { _id } = req.user;
        const cars = await Car.find({ owner: _id })
        res.json({ success: true, cars })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}
// api to toggle cars Availability
export const toggleCarAvailability = async (req, res) => {

    try {
        const { _id } = req.user;
        const { carId } = req.body;
        const car = await Car.findById({ owner: _id })

        // checking car belongs to owner ;

        if (car.owner.toString() !== _id.toString()) {
            return res.json({ success: false, message: "unauthorized" })
        }
        car.isAvaliable = !car.isAvaliable;
        await car.save()
        res.json({ success: true, message: "Availability toggle" })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const deleteCar = async (req, res) => {
    try {
        const { _id } = req.user;
        const { carId } = req.body;
        const car = await Car.findById({ carId })
        // checking is car is belong to user 

        if (car.owner.toString() !== _id.toString()) {
            return res.json({ success: false, message: "unauthorized" })
        }

        car.owner = null;
        car.isAvaliable = false;
        await car.save()

        res.json({ success: true, message: "car remove " })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

// api to get dashboard data

export const getDashboardData = async (req, res) => {
    try {
        const { _id, role } = req.user;

        if (role !== role) {
            return res.json({ success: true, message: "Unauthorized" })
        }

        const cars = await Car.find({ owner: _id })

        const bookings = await Booking.find({ owner: _id }).populate('car').sort({ createAt: -1 })

        const pendingBookings = await Booking.find({ owner: _id, status: "pending" })

        const completeBookings = await Booking.find({ owner: _id, status: "confirmed" })

        // calculate monthly Revenue from booking where status is confirmed 

        const monthlyRevenue = await bookings.slice().filter(booking => booking.status === 'confirmed').reduce((acc, booking) =>
            acc + booking.price, 0
        )
        const dashboardData = {
            totalCars: cars.length,
            totalBookings: bookings.length,
            pendingBookings: pendingBookings.length,
            completeBookings: completeBookings.length,
            recentBookings: bookings.slice(0, 3),
            monthlyRevenue


        }

        res.json({ success: true, dashboardData })

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}


// api to update user image

export const updateUserImage = async (req, res) => {
    try {

        const { _id } = req.user;
        const imageFile = req.file;
        //  upload image to imagekit
        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/users"
        }) 

         // optimization through URL transformation 

        var optimizedImageURL = imagekit.url({
            path: response.filePath,
            transformation: [
                { "width": "1280" },
                { quality: "auto" },
                { format: "webp" }
            ]
        })

        const image = optimizedImageURL ;

        await User.findByIdAndUpdate(_id,{image});

        res.json({success:true , message : "Image Updated"})





    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })

    }

}