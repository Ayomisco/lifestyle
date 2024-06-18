import React, { useState } from 'react'; // Import React and useState hook
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import menu icons
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    // State to handle the navbar's open/close status
    const [openNav, setOpenNav] = useState(true);

    // Function to toggle the navbar's visibility
    const ToggleNavBar = () => {
        setOpenNav(!openNav);
    };

    return (
        <>
            {/* Main Navigation Bar */}
            <nav className='bg-black text-white w-full flex justify-between items-center h-16 mx-auto px-5'>
                
                {/* Logo */}
                <h1 className='text-[27px] text-[gold] font-bold'>LIFESTYLE</h1>
                
                {/* Desktop Navigation Links */}
                <ul className='hidden md:flex space-x-6'>

                   <li> <NavLink to={"/"}> Home </NavLink> </li>
                   <li> <NavLink to={"/about-us"}> About Us </NavLink> </li>
                    <li><NavLink to={"/our-services"}> Our Services </NavLink></li>
                    <li><NavLink to={"/contact-us"}> Contact Us </NavLink></li>
                    
                   
                </ul>
                
                {/* Desktop Buttons */}
                <div className='hidden md:flex space-x-4'>
                    <button className='bg-[gold] px-4 py-2 text-[black] font-bold rounded-md'>Login</button>
                    <button className='bg-[gold] px-4 py-2 text-[black] font-bold rounded-md'>Register</button>
                </div>
                
                {/* Hamburger Menu Icon for Mobile */}
                <div className='md:hidden right-6 fixed' onClick={ToggleNavBar}>
                    {/* Toggle between open and close icons based on openNav state */}
                    {!openNav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div>

                {/* Mobile Navigation Menu */}
                <div className={!openNav ? 'left-[0%] fixed top-0 w-[60%] bg-[#141313] h-full block pl-4 pt-4 ease-in-out duration-500 md:hidden' : "fixed left-[100%] ease-in-out duration-500"}>
                    {/* Logo in Mobile Menu */}
                    <h1 className='text-[27px] text-[gold] font-bold'>LIFESTYLE</h1>
                    
                    {/* Mobile Navigation Links */}
                    <ul className='block space-y-4 pt-8'>
                        <li className='border-b border-[#232323]'> <NavLink to={"/"}> Home </NavLink>  </li>
                        <li className='border-b border-[#232323]'> <NavLink to={"/about-us"}> About Us </NavLink>  </li>
                        <li className='border-b border-[#232323]'> <NavLink to={"/our-services"}> Our Services </NavLink> </li>
                        <li className='border-b border-[#232323]'> <NavLink to={"/contact-us"}> Contact Us </NavLink> </li>
                    </ul>
                    
                    {/* Mobile Buttons */}
                    <div className='block space-y-4 pt-5'>
                        <button className='bg-[gold] w-full py-2 text-[black] font-bold rounded-md block'>Login</button>
                        <button className='bg-[gold] w-full py-2 text-[black] font-bold rounded-md'>Register</button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar; // Export Navbar component
