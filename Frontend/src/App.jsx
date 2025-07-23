import React from 'react'
import {Route , Routes} from 'react-router-dom'
import Userlogin from './pages/Userlogin'
import Usersignup from './pages/Usersignup'
import Utilitysignup from './pages/Utilitysignup'
import Utilitylogin from './pages/Utilitylogin'
import Home from  './pages/Home'
const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/signup" element={<Usersignup/>}/>
       <Route path="/login" element={<Userlogin/>}/>
        <Route path="/utility-signup" element={<Utilitysignup/>}/>
         <Route path="/utility-login" element={<Utilitylogin/>}/>
          <Route path="/home" element={<Home/>}/>
      
    </Routes>
    </div>
  )
}

export default App