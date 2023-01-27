import React, { createContext, FC, useReducer, useEffect } from 'react'
import { MoviesContextTypes } from '../@types/movies'
import moviesReducer from './MoviesReducer'
import { getHomeData } from './RequestActions'

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
  const [state, dispatch] = useReducer(moviesReducer, initialState)

  useEffect(() => {
    const fetchData = async () => {
      const result = await getHomeData()

      dispatch({ type: 'GET_DATA', payload: result })
    }
    fetchData()
  }, [])

  return (
    <MoviesContext.Provider
      value={{
        ...state,
      }}>
      {children}
    </MoviesContext.Provider>
  )
}

export default MoviesContext
