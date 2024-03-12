import React from 'react'
import resume from '../assets/resume.png'
function About() {
  return (
    <div id='About' className='w-full m-auto md:pl-20 p-4 py-16 bg-zinc-600 text-white'>
      <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
        <h1 className='sm:text-5xl text-4xl font-bold text-white mb-6'>
            About Me
        </h1>
        <p className='flex sm:text-2xl md:text-sm  p-4 tracking-wide text-justify'>
        Greetings, I'm Enitan, but you can call me Prevail. I'm a dedicated Front End Engineer with a fervor for crafting cutting-edge and captivating digital experiences.
        </p>
        <h2 className=' sm:text-3xl md:text-lg font-bold mb-4 tracking-wide  '>
        Professional Background
        </h2>
        <p className='flex sm:text-2xl md:text-sm p-4 tracking-wide text-justify' >
        I possess a Mechanical Engineering certificate and boast approximately 
        one year of hands-on experience in the web development arena. Despite 
        being relatively new to this field, I've actively contributed to several 
        projects, showcasing my commitment and skills in the dynamic realm of 
        web development. 
        </p>
        <h2 className=' sm:text-3xl md:text-lg font-bold mb-4 tracking-wide  '>
        Values and Approach
        </h2>
        <p className='flex sm:text-2xl md:text-sm p-4 tracking-wide text-justify' >
        As a front-end developer, I prioritize user-centric design, clean code, 
        and seamless experiences. I value collaboration, effective communication, 
        and continuous learning to deliver innovative solutions
        </p>
        <h2 className=' sm:text-3xl md:text-lg font-bold mb-4 tracking-wide  '>
        Unique Selling Proposition
        </h2>
        <p className='flex sm:text-2xl md:text-sm p-4 tracking-wide text-justify' >
        Empowering digital innovation through a unique blend of mechanical engineering 
        precision and front-end development creativity. Bridging the gap between technical 
        prowess and intuitive design, I bring a fresh perspective to elevate user 
        experiences in the tech realm.
        </p>
        <h2 className=' sm:text-3xl md:text-lg font-bold mb-4 tracking-wide  '>
        Future Goals
        </h2>
        <p className='flex sm:text-2xl md:text-sm p-4 tracking-wide text-justify' >
        Future goals include advancing as a front-end developer, staying updated on 
        tech trends, and leveraging my mechanical engineering background to innovate 
        in digital experiences. Aspiring to become a recognized leader in tech, driving 
        positive change and inspiring others.
        </p>
        <p className='flex sm:text-2xl md:text-sm p-4 tracking-wide' >
        Thank you for visiting, and I look forward to connecting with you!
        </p>
        <a href="https://drive.google.com/file/d/1pehy9taq6SnC6tc3hDokoMYsvhYNuwCR/view?usp=drive_link" className='flex flex-row'>
          <button className='flex p-4 border-4 hover:scale-110 duration-300 border-white rounded-lg bg-gray-300 text-black text-2xl ml-0 mt-6 cursor-pointer'>
            <img src={resume} className='w-8' alt="resume" />
            Resumé
          </button>
        </a>
      </div>
    </div>
  )
}

export default About
