import React from 'react'
import { IN, Face, Git, G, Insta } from './assets'
import { Link } from 'react-router-dom'
import { AiTwotoneHome } from 'react-icons/ai'
import { GiClassicalKnowledge } from 'react-icons/gi'
import { PiProjectorScreenChart } from 'react-icons/pi'
const NavBar = () => {
  return (
    <div>
      <div className='fixed end-0 text-sky-200 z-10'>
        <Link to={'/'}>
          <div className='relative rounded-es-2xl bg-sky-700 border-sky-400 border-2 border-t-0 border-e-0 p-1  z-20 hover:scale-110 hover:translate-x-0 hover:transform hover:duration-300 translate-x-2 duration-300 hover:z-50'>
            <AiTwotoneHome fontSize={30} className='' />
          </div>
        </Link>
        <Link to={'/Projects'}>
          <div className='relative rounded-s-full bg-sky-700 border-sky-400 border-2 border-t-0 border-e-0 p-1 -translate-y-1 z-10 hover:scale-110 hover:translate-x-0 hover:transform hover:duration-300 translate-x-2 duration-300 hover:z-50'>
            <PiProjectorScreenChart fontSize={30} className='' />
          </div>
        </Link>
        <Link to={'/Experience'}>
          <div className='relative rounded-s-full bg-sky-700 border-sky-400 border-2 border-t-0 border-e-0 p-1 -translate-y-2 z-0 hover:scale-110 hover:translate-x-0 hover:transform hover:duration-300 translate-x-2 duration-300 hover:z-50'>
            <GiClassicalKnowledge fontSize={30} className=' ' />
          </div>
        </Link>
      </div>
      <div className=' fixed top-10 z-10'>
        <a href='https://www.instagram.com/eslamwtf/' target='_blank' rel="noreferrer">
          <div className='border-sky-200 border-e-2 rounded-e-3xl bg-sky-700 w-10 h-10 hover:scale-125 my-1 hover:translate-x-1 hover:transform hover:duration-300 -translate-x-0 duration-300 hover:z-50 '>
            <img src={Insta} className=' w-8 translate-y-1' alt='instagram' />
          </div>
        </a>
        <a
          href='https://www.linkedin.com/in/eslam-hegazi-6927751a1/'
          target='_blank' rel="noreferrer">
          <div className='border-sky-200 border-e-2 rounded-e-3xl bg-sky-700 w-10 h-10 hover:scale-125 my-1 hover:translate-x-1 hover:transform hover:duration-300 -translate-x-0 duration-300 hover:z-50'>
            <img src={IN} className=' w-8 translate-y-1' alt='Linkin' />
          </div>
        </a>
        <a href='mailto:eslamwtf@gmail.com' target='_blank' rel="noreferrer">
          <div className='border-sky-200 border-e-2 rounded-e-3xl bg-sky-700 w-10 h-10 hover:scale-125 my-1 hover:translate-x-1 hover:transform hover:duration-300 -translate-x-0 duration-300 hover:z-50'>
            <img src={G} className=' w-8 translate-y-1' alt='Gmail' />
          </div>
        </a>

        <a href='https://github.com/MalseBot' target='_blank' rel="noreferrer">
          <div className='border-sky-200 border-e-2 rounded-e-3xl bg-sky-700 w-10 h-10 hover:scale-125 my-1 hover:translate-x-1 hover:transform hover:duration-300 -translate-x-0 duration-300 hover:z-50'>
            <img src={Git} className=' w-8 translate-y-1' alt='Git hub' />
          </div>
        </a>
        <a
          href='https://www.facebook.com/profile.php?id=100067973934851'
          target='_blank' rel="noreferrer">
          <div className='border-sky-200 border-e-2 rounded-e-3xl bg-sky-700 w-10 h-10 hover:scale-125 my-1 hover:translate-x-1 hover:transform hover:duration-300 -translate-x-0 duration-300 hover:z-50'>
            <img src={Face} className=' w-8 translate-y-1' alt='Facebook' />
          </div>
        </a>
        <a href='https://twitter.com/eslamwtf' target='_blank' rel="noreferrer">
          <div className='  border-e-2 rounded-e-3xl bg-sky-700 w-10 h-10 hover:scale-125 my-1 hover:translate-x-1 hover:transform hover:duration-300 -translate-x-0 duration-300 hover:z-50'>
            <svg
              viewBox='0 0 1200 1227'
              xmlns='http://www.w3.org/2000/svg'
              role='none'
              class='u01b__icon-home'
              className='w-8 translate-y-1  '>
              <path d='M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z'></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  )
}

export default NavBar
