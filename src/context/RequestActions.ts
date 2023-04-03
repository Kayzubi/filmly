import axios from 'axios'
const tmbd_url: string = process.env.REACT_APP_TMBD_URL as string
const API_KEY: string = process.env.REACT_APP_TMBD_API_KEY as string

const movies = axios.create({
  baseURL: tmbd_url,
})

export const getHomeData = async () => {
  const [movieList, showsList, upcoming] = await Promise.all([
    movies.get(`/trending/movie/week?api_key=${API_KEY}`),
    movies.get(`/trending/tv/week?api_key=${API_KEY}`),
    movies.get(
      `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=GB`
    ),
  ])

  const moviesResult = movieList.data.results.map((item: any) => {
    return {
      backdrop_path: item.backdrop_path,
      id: item.id,
      title: item.title,
      media_type: item.media_type,
      vote_average: item.vote_average,
      release_date: item.release_date,
      poster_path: item.poster_path,
      overview: item.overview,
    }
  })

  const showsResult = showsList.data.results.map((item: any) => {
    return {
      backdrop_path: item.backdrop_path,
      id: item.id,
      title: item.name,
      media_type: item.media_type,
      vote_average: item.vote_average,
      release_date: item.first_air_date,
      poster_path: item.poster_path,
      overview: item.overview,
    }
  })

  return {
    movies: moviesResult,
    tvshows: showsResult,
    upcoming: upcoming.data.results,
  }
}

export const getData = async (
  url: string,
  callback: (data: any) => void,
  loadingFunc?: (value: boolean) => void,
  errorFunc?: (value: any) => void
) => {
  try {
    if (loadingFunc) {
      loadingFunc(true)
    }
    const response = await movies.get(url)
    callback(response.data)

    if (loadingFunc) {
      loadingFunc(false)
    }
  } catch (error: any) {
    if (errorFunc) {
      errorFunc(error)
    }
    if (loadingFunc) {
      loadingFunc(true)
    }
  }
}
