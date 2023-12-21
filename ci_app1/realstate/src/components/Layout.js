import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import ServiceContextProvider from './ServiceContext'

export default function Layout() {
  return (
    <>
        <div class="body-wrapper">
          <ServiceContextProvider>
            <Header></Header>
            <div class="ltn__utilize-overlay"></div>
            <Outlet></Outlet>
            <Footer></Footer>
          </ServiceContextProvider>
        </div>

    </>
  )
}
