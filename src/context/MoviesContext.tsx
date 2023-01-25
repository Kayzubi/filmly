import React, { createContext, FC } from 'react'
import { MoviesContextTypes } from '../@types/movies'

interface Props {
  children: React.ReactNode
}

const initialState = {
  trending: [],
  upcoming: [],
  loading: true,
}

const MoviesContext = createContext<MoviesContextTypes>(initialState)

export const MoviesProvider: FC<Props> = ({ children }) => {
  return (
    <MoviesContext.Provider value={initialState}>
      {children}
    </MoviesContext.Provider>
  )
}

export default MoviesContext
