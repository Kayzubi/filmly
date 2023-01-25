import React from 'react'
import './App.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import Routers from './routes/routers'

import { MoviesProvider } from './context/MoviesContext'

function App() {
  return (
    <MoviesProvider>
      <Router>
        <Routers />
      </Router>
    </MoviesProvider>
  )
}

export default App
