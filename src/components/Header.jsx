import React from 'react';
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <img className='w-[350px]' src={logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;