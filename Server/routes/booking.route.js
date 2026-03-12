import express from 'express'
import { changeBookingStatus, checkAvailability, checkAvailabilityOfCar, createBookings, getOwnerBookings, getUserBookings } from '../controllers/booking.controller.js';
import  {protect}  from '../middleware/auth.js'


const bookingRouter = express.Router();


bookingRouter.post('/check-availability' , checkAvailability);
bookingRouter.post('/create', protect ,createBookings);
bookingRouter.get('/user' , protect , getUserBookings);
bookingRouter.get('/owner', protect , getOwnerBookings);
bookingRouter.post('/change-status' , protect , changeBookingStatus);



export default bookingRouter ;