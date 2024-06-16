import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";



const Navbar = () => {

    const [openNav, setOpenNav] = useState(true)

    const ToggleNavBar = () => {
        setOpenNav(!openNav)
    }

    return (
        <>

        <nav className='bg-black text-white flex justify-between items-center h-16 px-10 mx-auto'>

            <h1 className='text-[27px] text-[gold] font-bold '>LIFESTYLE</h1>

            <ul className='hidden md:flex space-x-6 '>
                <li><a href="">Home</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Our Service</a></li>
                <li><a href="">Contact Us</a></li>

                
            </ul>

            <div className='hidden md:flex space-x-4 '>
                <button className='bg-[gold] px-4 py-2 text-[black] font-bold rounded-md'>Login</button>
                <button className='bg-[gold] px-4 py-2 text-[black] font-bold rounded-md'>Register</button>
            </div>

        <div className='md:hidden right-6 fixed ' onClick={ToggleNavBar}>
            {!openNav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            
        </div>


        {/* MOBILE Nav */}
        <div className={!openNav ? 'left-[0%] fixed top-0 w-[60%] bg-[#141313] h-full block pl-4 pt-4 ease-in-out duration-500 md:hidden': "fixed left-[100%] ease-in-out duration-500"}>
            <h1 className='text-[27px] text-[gold] font-bold '>LIFESTYLE</h1>

            <ul className='block space-y-4 pt-8'>
                <li className='border-b border-[#232323]'><a href="">Home</a></li>
                <li className='border-b border-[#232323]'><a href="">About Us</a></li>
                <li className='border-b border-[#232323]'><a href="">Our Service</a></li>
                <li className='border-b border-[#232323]'><a href="">Contact Us</a></li>

                
            </ul>

            <div className='block space-y-4 pt-5'>
                <button className='bg-[gold] w-full py-2 text-[black] font-bold rounded-md block' >Login</button> 
                <button className='bg-[gold] w-full py-2 text-[black] font-bold rounded-md'>Register</button>
            </div>



        </div>

        </nav>

        </>
    );
};

export default Navbar;
