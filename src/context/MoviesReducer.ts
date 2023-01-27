import { ReducerTypes, MoviesContextTypes } from '../@types/movies'

const moviesReducer = (state: MoviesContextTypes, action: ReducerTypes) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        trending: action.payload.trending,
        upcoming: action.payload.upcoming,
        loading: false,
      }
    default:
      return state
  }
}

export default moviesReducer
