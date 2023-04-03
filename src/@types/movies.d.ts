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
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface HeroDataType {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface MoviesContextTypes {
  movies: TrendingTypes[]
  tvshows: TrendingTypes[]
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
