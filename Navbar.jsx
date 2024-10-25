import React from 'react'
import { GiCandleLight } from "react-icons/gi";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand text-white" href="#">
              <GiCandleLight className='text-danger mb-2'/>
                Diwali Carnival
            </a>
            <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-white" href="#about">About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-white" href="#highlights">Key Highlights</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-white" href="#schedule">Schedule</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-white" href='#venue'>Venue</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-white" href="#hotels">Hotels</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-white" href='#gallery'>Gallery</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-white" href='#singers'>Singers</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-white" href="#contact">Contact</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-white" href='#buytickets'>Buy Ticekts</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar