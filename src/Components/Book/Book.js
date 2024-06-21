import React from 'react'
import { Outlet } from 'react-router-dom'

const Book = () => {
  return (
    <div>
        <h1>Kodaikanal Hotals</h1>
        <Outlet />
    </div>
  )
}

export default Book