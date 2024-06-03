import React from 'react'
import { FaTwitterSquare,FaFacebookSquare,FaInstagramSquare,FaGithubSquare } from "react-icons/fa";

const CardFooter = () => {
  return (
    <footer>
        <FaTwitterSquare className='icon' />
        <FaFacebookSquare className='icon' />
        <FaInstagramSquare className='icon' />
        <FaGithubSquare className='icon' />
    </footer>
  )
}

export default CardFooter