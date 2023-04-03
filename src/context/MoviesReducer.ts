import { ReducerTypes, MoviesContextTypes } from '../@types/movies'

const moviesReducer = (state: MoviesContextTypes, action: ReducerTypes) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        movies: action.payload.movies,
        tvshows: action.payload.tvshows,
        upcoming: action.payload.upcoming,
        loading: false,
      }
    default:
      return state
  }
}

export default moviesReducer
