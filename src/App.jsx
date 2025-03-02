import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/shared/Home'
import Support from './components/pages/Support'
import Complaint from './components/pages/Complaint'
import Sidebar from './components/Admin/Sidebar'
import TopBar from './components/Admin/Topbar'
import Faq from './components/pages/Faq'
import Profile from './components/Users/Profile'
import Userlayout from './Layouts/Userlayout'
import Tracking from './components/Users/Tracking'
import WelcomePage from './components/shared/WelcomePage'
import SettingsPage from './components/Users/Settings'
import Contact from './components/pages/Contact'
import Feedback from './components/pages/Feedback'
import Adminlayout from './Layouts/Adminlayout'
import Awelcome from './components/Admin1/Awelcome'
import Aprofile from './components/Admin1/Aprofile'
import Ausers from './components/Admin1/Ausers'
import Acomplaints from './components/Admin1/Acomplaint'
import Aanalytics from './components/Admin1/Aanalytics'
import Login from './components/Auth/Login'
import Register  from './components/Auth/Register'




const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/feedback' element={<Feedback/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/faq' element={<Faq/>}/>
          <Route path='/support' element={<Support/>}/>
          <Route path='/complaint' element={<Complaint/>}/>

          <Route element={<Userlayout/>}>
               <Route path='/dashboard' element={<WelcomePage/>}/>
               <Route path='/profile' element={<Profile/>}/>
               <Route path='/track' element={<Tracking/>}/>
               <Route path='/settings' element={<SettingsPage/>}/>
          </Route>

          <Route element={<Adminlayout/>}>
               <Route path='/welcome' element={<Awelcome/>}/>   
               <Route path='/aprofile' element={<Aprofile/>}/>   
               <Route path='/ausers' element={<Ausers/>}/>   
               <Route path='/acomplaints' element={<Acomplaints/>}/>   
               <Route path='/analytics' element={<Aanalytics/>}/>   
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
