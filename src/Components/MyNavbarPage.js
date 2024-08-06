import React from 'react'
import img2 from '../Images/Frame 3762.png'

import './MyNavbar.css'
import {
    Avatar,
    Dropdown,
    // DropdownDivider,
    // DropdownHeader,
    // DropdownItem,
    Navbar,
    // NavbarBrand,
    // NavbarCollapse,
    // NavbarLink,
    // NavbarToggle,
  } from "flowbite-react";

const MyNavbarPage = () => {
    return (
        <div>
        <div className='hidden md:block'>
          <Navbar fluid className=" bg-[#18092F] border-0 rounded-lg ">
            <Navbar.Brand>
              <span className="whitespace-nowrap text-xl font-semibold dark:text-white NavbarYashmita">Yashmita Bansal</span>
            </Navbar.Brand>
            <div>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar alt="User settings" img={img2} rounded />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">Yashmita Bansal</span>
                  <span className="block truncate text-sm font-medium">yashmitabansal@gmail.com</span>
                </Dropdown.Header>
              
              </Dropdown>
              <Navbar.Toggle />
            </div>
            <Navbar.Collapse className='text-left'>
              <Navbar.Link href="/" aria-current="page" className='text-white text-xl transition ease-in-out duration-300 hover:scale-110 hover:font-semibold hover:text-black navbarText'  >
                Home
              </Navbar.Link>
              <Navbar.Link href="/About" className='text-white  transition ease-in-out duration-300 hover:font-semibold hover:scale-110 text-xl hover:text-black navbarText'>About</Navbar.Link>
              <Navbar.Link href="/Projects" className='text-white text-xl transition ease-in-out duration-300 hover:scale-110 hover:text-black hover:font-semibold navbarText'>Projects</Navbar.Link>
              <Navbar.Link href="/Contact" className='text-white text-xl transition ease-in-out duration-300 hover:scale-110 hover:text-black hover:font-semibold navbarText'>Contact</Navbar.Link>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className='block md:hidden'  >
          <Navbar fluid className=" bg-[#18092F] border-0 rounded-lg ">
                  <div>
                  <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                      <Avatar alt="User settings" img={img2} rounded />
                    }
                  >
                    <Dropdown.Header>
                      <span className="block text-sm">Yashmita Bansal</span>
                      <span className="block truncate text-sm font-medium">yashmitabansal@gmail.com</span>
                    </Dropdown.Header>
                  
                  </Dropdown>
                  <Navbar.Toggle />
                </div>
              
              <Navbar.Collapse>
                <Navbar.Link href="/" aria-current="page" className='text-white text-xl transition ease-in-out duration-300 hover:scale-105 hover:font-semibold hover:text-black navbarText'  >
                  Home
                </Navbar.Link>
                <Navbar.Link href="/About" className='text-white text-xl transition ease-in-out duration-300 hover:scale-105 hover:font-semibold hover:text-black navbarText'  >About</Navbar.Link>
                <Navbar.Link href="/Projects"className='text-white text-xl transition ease-in-out duration-300 hover:scale-105 hover:font-semibold hover:text-black navbarText'  >Projects</Navbar.Link>
                <Navbar.Link href="/Contact" className='text-white text-xl transition ease-in-out duration-300 hover:scale-105 hover:font-semibold hover:text-black navbarText'  >Contact</Navbar.Link>
              </Navbar.Collapse>
          </Navbar>
        </div>
        
        </div>
    )
}

export default MyNavbarPage;