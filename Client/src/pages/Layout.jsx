import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from './Dashboard'

const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Layout