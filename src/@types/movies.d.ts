export interface TrendingTypes {
  backdrop_path: string
  id: number
  title: string
  media_type: string
  vote_average: number
  release_date: string
  poster_path: string
  overview: string
}

export interface UpcomingTypes {
  title: string
  release_date: string
  poster_path: string
}

export interface MoviesContextTypes {
  trending: TrendingTypes[]
  upcoming: UpcomingTypes[]
  loading: boolean
}

export interface ReducerTypes {
  type: string
  payload: any
}

export interface CurrentUserTypes {
  firstname: string
  lastname: string
  id: string
  watchlist: any
  email: string
}
