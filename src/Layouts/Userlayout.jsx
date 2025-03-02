import React from 'react'
import Sidebar from '../components/Admin/Sidebar'
import TopBar from '../components/Admin/Topbar'
import { Outlet } from 'react-router-dom'

const Userlayout = () => {
  return (
    <div className='h-screen w-screen flex flex-row overflow-hidden'>
    <div className=' h-[10rem] w-1/6'>
       <Sidebar/>
    </div>
    <div className='flex flex-col w-5/6 '>
      <div className=''>
        <TopBar/>
      </div>
      <div className=' h-full'>
        <Outlet/>
      </div>
    </div>
  </div>
  )
}

export default Userlayout
