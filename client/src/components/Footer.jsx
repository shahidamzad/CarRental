import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='px-8 md:px-16 xl:px-24 mt-32 mt-60 text-sm text-gray-500'>

            <div className='flex flex-wrap justify-between items-start gap-8 pb-6 border-bordeecolor 
             border-b'>
                <div className='max-w-80'>
                    <img src={assets.logo} alt="logo" className=' h-8 md:h-9' />
                    <p className='max-w-80 mt-3 '>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    </p>

                    <div className='flex items-center gap-3 mt-6'>

                        <a href="#"><img src={assets.facebook_logo} alt="" className='w-5 h-5' /></a>
                        <a href="#"><img src={assets.instagram_logo} alt="" className='w-5 h-5' /></a>
                        <a href="#"><img src={assets.twitter_logo} alt="" className='w-5 h-5' /></a>
                        <a href="#"><img src={assets.gmail_logo} alt="" className='w-5 h-5' /></a>


                    </div>
                </div>

                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase '>Quick Links</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Browse Car</a></li>
                        <li><a href="#">List Your Car</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase '>Resources</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy </a></li>
                        <li><a href="#">Insurance</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase '>Contact</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li>123,Luxury Driver </li>
                        <li> San Fancisco CA 56515</li>
                        <li> +1 552 454 521</li>
                        <li> CarRental.gmail.com</li>
                    </ul>
                </div>

            </div>

            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
                <ul className='flex items-center gap-4'>

                    <li><a href="#">Privacy</a> </li>
                    <li>|</li>
                    <li><a href="#">Terms</a> </li>
                    <li>|</li>
                    <li><a href="#">Cookies </a> </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer