import React from 'react'
import './index.css'
import list from './Data'
function Projects() {
  return (
    <div className=''>
      <div className='bg-pro h-screen w-full absolute opacity-50  -z-10 overflow-x-hidden border-b-blue-600 border-b-2'></div>
      <h2 className='pt-10 mb-5 text-center font-bold md:text-4xl text-2xl text-indigo-950 uppercase border-b-2 border-b-indigo-950'>
        Front-End Projects
      </h2>
      <div className=' grid md:grid-cols-3 gap-3 grid-cols-1 md:mx-28 mx-12  '>
        {list.map(({ link, img, title, descreption, altert }, e) => {
          return (
            <a
              key={e.length}
              href={link}
              target='_blank'
              rel='noreferrer'
              className='relative '>
              <img
                src={img}
                alt={altert}
                className='rounded-lg shadow-2xl border-2 border-indigo-500'
              />
              <div className='absolute rounded-lg top-0 bottom-0  end-0 start-0 left-0 right-0 hover:duration-500 duration-500 opacity-0 bg-slate-950 hover:opacity-100 hover:bg-opacity-80 p-1 text-white'>
                <h3 className=' text-xl uppercase font-bold text-rose-300'>
                  {title}
                </h3>{' '}
                <p className=' w-full text-slate-200'>{descreption}</p>
              </div>
            </a>
          )
        })}
      </div>

      <div className='bg-footro h-screen w-full absolute opacity-50 -z-10 overflow-x-hidden border-t-blue-600 border-tj-2'></div>
    </div>
  )
}

export default Projects
