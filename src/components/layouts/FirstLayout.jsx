import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header';
import Footer from '../footer/Footer';

function FirstLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

export default FirstLayout
