import { json } from "express";
import User from "../models/User.js";

import fs from 'fs'
import { imagekit } from "../configs/imageKit.js";
import Car from "../models/Car.js";



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

        const image =optimizedImageURL;

        await Car.create({...car , owner:_id , image})

        res.json({success : true , message : "Car Added"})



    } catch (error) {
        return res.status(500).json({
            message: error.message
        });

    }
}

// api list to get all  owner cars


export const getOwnerCars = (req , res ) =>{
    try {
        
        
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });

        
    }
}