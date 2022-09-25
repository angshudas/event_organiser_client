import React from 'react';
import logo from '../images/logo.jpg';
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'

function Contact() {
  return (
    <div id='Contact' className='py-3 h-screen flex flex-col justify-center gap-16 items-center text-yellow-600 text-center tab:text-4xl lap:flex-row'>
      <div className='flex flex-wrap gap-3 justify-center tab:gap-7'>
        <h1 className='text-3xl w-full tab:text-5xl lap:text-2xl'>Get In Touch</h1>
        <img src={facebook} alt="" className='w-8 aspect-square tab:w-14 lap:w-8' />
        <img src={twitter} alt="" className='w-8 aspect-square tab:w-14 lap:w-8' />
        <img src={instagram} alt="" className='w-8 aspect-square tab:w-14 lap:w-8' />
      </div>
      <div className='flex flex-col items-center justify-center gap-1 text-xl tab:text-4xl lap:text-lg'>
          <img src={logo} alt="logo" />
          <p>Royal Organisers</p>
          <p>Gey Your Events Orgainsed</p>
      </div>
      <div className='lap:text-xl'>
        <p>Contact - 7896848191</p>
        <p>Email - royal@gmail.com</p>
      </div>
    </div>
  )
}

export default Contact