import React from 'react';
import backgroundImg from '../assets/IMG_5132.jpg';
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedinIn  } from 'react-icons/fa';

function Main() {
    return (
        <div id='main'>
            <img  className='w-full h-screen object-cover object-center scale-x-[-1}'
            src={backgroundImg} 
            alt="background" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/40' >
             <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800 '> I'm Enitan Ayoola</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm               
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'a Front-End Developer',
                    2000, // wait 1s before replacing 
                    'a Tech Enthusiast',
                    2000,
                    'a Designer',
                    2000,
                    'an Engineer',
                    2000,
                    ]}
                    wrapper="span"
                    speed={40}
                    style={{ fontSize: '1em', paddingLeft:'10px' }}
                    repeat={Infinity}
                />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <a href="https://twitter.com/Fantastizeey"><FaTwitter className='cursor-pointer' size={20} /></a>
                    <a href="https://www.instagram.com/fantastizeey"><FaInstagram className='cursor-pointer' size={20} /></a>
                    <a href="https://www.linkedin.com/in/ayoolaenitan"><FaLinkedinIn className='cursor-pointer' size={20} /></a>
                    <a href="https://github.com/fantastizeey1"><FaGithub className='cursor-pointer' size={20} /></a>
                </div>
             </div>
            </div>
        </div>
    );
} 

export default Main
