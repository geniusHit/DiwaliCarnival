import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='d-flex flex-column bg-dark mt-5'>
      <div className='py-5 justify-content-sm-evenly flex-column flex-sm-row d-flex text-white' style={{gap:'30px'}}>
        <div className='d-flex flex-column text-center' style={{gap:'10px'}}>
          <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
          <a class="nav-link text-white" href="#highlights">Key Highlights</a>
          <a class="nav-link text-white" href="#schedule">Schedule</a>
          <a class="nav-link text-white" href='#venue'>Venue</a>
          <a class="nav-link text-white" href="#hotels">Hotels</a>
          <a class="nav-link text-white" href='#gallery'>Gallery</a>
          <a class="nav-link text-white" href='#singers'>Singers</a>
          <a class="nav-link text-white" href='#buytickets'>Buy Ticekts</a>
        </div>

        <div className='d-flex flex-column text-center' style={{gap:'10px'}}>
          <a class="nav-link text-white" href="#about">About</a>
          <a class="nav-link text-white" href="#contact">Contact</a>
        </div>

        <div className='d-flex justify-content-center justify-content-sm-between' style={{gap:'15px'}}>
          <FaYoutube className='fs-5'/>
          <FaInstagram className='fs-5' />
          <FaFacebook className='fs-5'/>
          <FaLinkedin className='fs-5'/>
          <FaGithub className='fs-5'/>
        </div>
      </div>

      <div className='text-white text-center py-4'>All Rights Reserved ©</div>
    </div>
  )
}

export default Footer