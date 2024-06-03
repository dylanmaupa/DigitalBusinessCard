import React from 'react'
import CardInfo from './CardInfo';
import CardText from './CardText';
import CardFooter from './CardFooter';

const Card = () => {
  return (
    <div className='cardLayout'>
        <div className="imgBox">
            <img src="/Laura Smith.png" alt="" />
        </div>
        <CardInfo/>
        <CardText/>
        <CardFooter/>
    </div>
  )
}

export default Card