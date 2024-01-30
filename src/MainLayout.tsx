import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './HomeScreens/HomePage'
import './index.css';

export const MainLayout = () => {
  return (
    <div className='main-container'>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </div>
  )
}
