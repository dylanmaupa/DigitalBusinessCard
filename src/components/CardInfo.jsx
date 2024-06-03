import React from 'react'
import { IoMail,IoLogoLinkedin } from "react-icons/io5";

const CardInfo = () => {
  return (
    <div className='textBox'>
        <div className="heading">
            <h2>Laura Smith</h2>
            <p>Frontend Developer</p>
            <a href="#">laurasmith.website</a>
        </div>
        <div className="btns-social">
            <button><IoMail /> Email</button>
            <button><IoLogoLinkedin/>LinkedIn</button>
        </div>
    </div>
  )
}

export default CardInfo