import React from 'react'

import { Outlet } from 'react-router-dom'
import Asidebar from '../components/Admin1/Asidebar'
import Atopbar from '../components/Admin1/Atopbar'


const Adminlayout = () => {
  return (
    <div className='h-screen w-screen flex flex-row overflow-hidden'>
    <div className=' h-[10rem] w-1/6'>
       <Asidebar/>
    </div>
    <div className='flex flex-col w-5/6 '>
      <div className=''>
        <Atopbar/>
      </div>
      <div className=' h-full'>
        <Outlet/>
      </div>
    </div>
  </div>
  )
}

export default Adminlayout