import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingScreen from './Loading'
import Login from './pages/LogIn'
import Register from './pages/Register'
import Homepage from './pages/Homepage'
import Buildings from './pages/Buildings'
import Requests from './pages/Request'


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <>
    {loading === false ? (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Login/> }></Route>                
                <Route path='/homepage' element={ <Homepage/> }></Route>
                <Route path='/homepage/register' element={ <Register/> }></Route>
                <Route path='/buildings' element={ <Buildings/>}> </Route>
                <Route path='/requests' element = { <Requests/>}></Route>
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