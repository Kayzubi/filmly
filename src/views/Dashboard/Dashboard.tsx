import React from 'react'
import Helmet from '../../components/Helmet/Helmet'
import Hero from '../../components/Hero/Hero'

const Dashboard = () => {
  return (
    <Helmet title='Home'>
      <div className='dashboard'>
        <Hero />
      </div>
    </Helmet>
  )
}

export default Dashboard
