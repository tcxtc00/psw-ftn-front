// WithNav.js (Stand-alone Functional Component)
import React from 'react'
import Header from './homePageComponents/header/Header'
import { Outlet } from 'react-router'

export default () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
