import React from 'react'

function ProjectItem({img, title, projectLink, sourceCodeLink } ) {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
      <img src={img} alt={title} className='rounded-xl group-hover:opacity-10 hover:scale-110 duration-300' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-lg  font-bold text-[#e6885c] tracking-wider text-center'>
            {title}
        </h3>
        <div className='flex flex-row justify-between'>
        <a href={projectLink} role="button">
            <p className='text-center p-2 rounded-lg mt-4 bg-white text-gray-700 font-normal cursor-pointer  text-lg  '
            >Demo</p>
        </a>
        <a href={sourceCodeLink} role="button">
            <p className='text-center p-2 rounded-lg mt-4 bg-white text-gray-700 font-normal cursor-pointer  text-lg'
            >Source </p>
        </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
