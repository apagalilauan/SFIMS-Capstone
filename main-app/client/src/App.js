import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingScreen from './Loading'
import Login from './pages/LogIn'
import Register from './pages/Register'
import Homepage from './pages/Homepage'
import Requests from './pages/Request'
import HomepageAdmin from './pages/Homepage-Admin'
import LandingPage from './pages/Landing';
import MainForm from './pages/MainForm';
import NotificationsPage from './pages/Notifications';
import DetailedNotifications from './pages/Detailed-Notification';



function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <>
    {loading === false ? (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={ <Login/> }></Route>                
                <Route path='/homepage' element={ <Homepage/> }></Route>
                <Route path='/homepage/register' element={ <Register/> }></Route>
                <Route path='/homepage-admin' element={ <HomepageAdmin/> }></Route>
                <Route path='/requests' element = { <Requests/>}></Route>
                <Route path='/welcome-page' element = { <LandingPage/>}></Route>
                <Route path='/Form' element={ <MainForm/> }></Route>  
                <Route path='/Notifications' element={ <NotificationsPage/> }></Route>  
                <Route path='/Notification_Details' element={ <DetailedNotifications/> }></Route> 
              </Routes>

        </BrowserRouter>
    </div>
      ) : (
        <LoadingScreen />
      )}
      </>
  );
}

export default App