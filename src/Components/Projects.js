import React from "react";
import { NavLink } from "react-router-dom";
// import './Projects.css';
import { PData } from "./ProjectData";
import Cards from "./Cards";
const Projects = () => {
    return (
        <div>
            <div className='container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2 '>
                <h1 className='text-center whitespace-nowrap text-5xl font-semibold mt-10'>
                    Our Projects
                </h1>
            </div>
            <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-10 mx-auto py-14 px-2 lg:px-4'>
                        <div>
                            <div className='row gy-3 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-12 lg:gap-y-16'>
                                {
                                    PData.map((val, ind) => {
                                        return <Cards
                                        title= {val.title} 
                                        description = {val.description}
                                        plink = {val.plink}
                                        imgsrc={val.imgsrc}
                                        />

                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;