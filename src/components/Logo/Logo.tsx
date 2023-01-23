import React from 'react'
import './logo.scss'
import { FaPlay } from 'react-icons/fa'

const Logo = () => {
  return (
    <div className='logo'>
      <h1>
        <span className='icons'>
          <FaPlay className='behind' />
          <FaPlay className='colored above' />
        </span>
        film<span className='colored'>ly</span>
      </h1>
    </div>
  )
}

export default Logo
