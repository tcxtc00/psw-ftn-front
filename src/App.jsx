import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CheckUps from './pages/checkUps/CheckUps'
import HomePage from './pages/homePage/HomePage'
import Registration from './pages/registration/Registration'
import MyCheckUps from './pages/myCheckUps/MyCheckUps'
import Pharmacy from './pages/pharmacy/Pharmacy'

import Users from './pages/users/Users'
import AdminReview from './pages/adminReview/AdminReview'

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
            <Route path="/home" element={<HomePage />} />
            <Route path="/check-ups" element={<CheckUps />} />
            <Route path="/my-check-ups" element={<MyCheckUps />} />
            <Route path="/pharmacy" element={<Pharmacy />} />
            <Route path="/users" element={<Users />} />
            <Route path="/admin-review" element={<AdminReview/>} />
          </Route>
          <Route path='*' element={<Registration/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={5000}  />
    </div>
  )
}

export default App