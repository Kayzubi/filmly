import React from 'react'

import { AnimatePresence } from 'framer-motion'
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
import Dashboard from '../../views/Dashboard/Dashboard'
import {
  HOME,
  MOVIES,
  PROFILE,
  SHOWS,
  WATCHLIST,
} from '../../routes/RouteConstants'

const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path={HOME} element={<Dashboard />} />
        <Route path={MOVIES} element={<h1>Movies</h1>} />
        <Route path={SHOWS} element={<h1>Shows</h1>} />
        <Route path={PROFILE} element={<h1>Profile</h1>} />
        <Route path={WATCHLIST} element={<h1>Watchlist</h1>} />
        <Route path='*' element={<Navigate to={HOME} />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
