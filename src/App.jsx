import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CheckUps from './pages/checkUps/CheckUps'
import HomePage from './pages/homePage/HomePage'
import Registration from './pages/registration/Registration'
import MyCheckUps from './pages/myCheckUps/MyCheckUps'

import WithoutHeader from './components/WithoutHeader'
import WithHeader from './components/WithHeader'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<WithoutHeader />}>
            <Route path="/registration" element={<Registration />} />
          </Route>
          <Route element={<WithHeader />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/check-ups" element={<CheckUps />} />
            <Route path="/my-check-ups" element={<MyCheckUps />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={5000}  />
    </div>
  )
}

export default App
