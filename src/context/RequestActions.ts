import axios from 'axios'
const tmbd_url: string = 'https://api.themoviedb.org/3'
const API_KEY: string = '844900ecbd272e079b15281ae1093b76'

const movies = axios.create({
  baseURL: tmbd_url,
})

export const getHomeData = async () => {
  const [trending, upcoming] = await Promise.all([
    movies.get(`/trending/all/week?api_key=${API_KEY}`),
    movies.get(
      `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=GB`
    ),
  ])

  const trendingResult = trending.data.results.map((item: any) => {
    if (item.media_type === 'movie') {
      return {
        backdrop_path: item.backdrop_path,
        id: item.id,
        title: item.title,
        media_type: item.media_type,
        vote_average: item.vote_average,
        release_date: item.release_date,
        poster_path: item.poster_path,
      }
    } else {
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
    }
  })

  const upcomingResult = upcoming.data.results.map((item: any) => {
    return {
      title: item.title,
      release_date: item.release_date,
      poster_path: item.poster_path,
    }
  })

  //   return { trending: trending, upcoming: upcoming }

  return { trending: trendingResult, upcoming: upcomingResult }
}
