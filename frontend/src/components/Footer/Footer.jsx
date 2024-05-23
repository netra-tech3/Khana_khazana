import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                <img  className ='logo' src={assets.logo} alt='' />
                <p> This is the advance food ordering app contact us at</p>
               <div className='footer-social-icons'>
               <img src= {assets.facebook_icon}alt='' />
                <img src={assets.twitter_icon} alt='' />
                <img src={assets.linkedin_icon} alt='' />

               </div>
                </div>
                <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li> Privacy Policy</li>

                </ul>
               




                </div>
                <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li> +9-444-5556-0000</li>
                    <li> contact@Khana_Khazana.com</li>
                </ul>

                </div>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright 2024 @ Khana_Khazana.com -All Right Reserved</p>


        </div>
    )
}

export default Footer
