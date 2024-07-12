import React from 'react'
// import Web from "../Images/c1.jpg";
// import { PData } from "./ProjectData";
// import './Card.css';
import { Card } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
const Cards = (props) => {
    return (
        <div>
        <Card
        className="max-w-sm bg-[#18092F] "
      >
        <img src={props.imgsrc} alt="Meaningful alt text for  that is not purely decorative" className='h-48'/>
        <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
        {props.title}
        </h5>
        <p className="font-normal text-white dark:text-gray-400 line-clamp-3">
        {props.description}
        </p>

        <NavLink to = {props.plink} className="font-medium text-indigo-400 hover:text-indigo-500
         dark:text-gray-400 btn ServiceBtn font-poppins">Go On Project</NavLink>
      </Card>

        
        </div>
    )
}

export default Cards;