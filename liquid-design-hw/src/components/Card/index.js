import Image from 'next/image'
import React from 'react'
import { FaRegClock } from "react-icons/fa6";
import Button from '../Button';
const Card = ({src, alt, title, time, description, info, price1, price2}) => {
  return (
    <div>
        <Image ></Image>
        <p>{title}</p>
        <span><FaRegClock /> {time}</span>
        <p>{description}</p>
        <span>{info}</span>
        <Button>
            <span>Classic</span>
            <span>{price1}</span>
        </Button>
        <Button>
            <span>Élite</span>
            <span>{price2}€</span>
        </Button>
    </div>
  )
}
export default Card