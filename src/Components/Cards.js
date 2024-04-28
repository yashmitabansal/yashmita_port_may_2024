import React from 'react'
import Web from "../Images/c1.jpg";
import { PData } from "./ProjectData";
// import './Card.css';
import { Card } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
const Cards = (props) => {
    return (
        <div>
        <Card
        className="max-w-sm bg-[#18092F]"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={props.imgsrc}
      >
        <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
        {props.title}
        </h5>
        <p className="font-normal text-white dark:text-gray-400">
        {props.description}
        </p>

        <NavLink to = {props.plink} className="font-medium text-indigo-400 hover:text-indigo-500
         dark:text-gray-400 btn ServiceBtn font-poppins">Go On Project</NavLink>
      </Card>

        
        </div>
    )
}

export default Cards;