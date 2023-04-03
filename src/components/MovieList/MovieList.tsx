import React, { FC } from 'react'
import { TrendingTypes } from '../../@types/movies'
import MovieCard from '../MovieCard/MovieCard'

interface Props {
  data: TrendingTypes[]
}

const MovieList: FC<Props> = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <MovieCard
          key={item.id}
          title={item.title}
          image={item.poster_path}
          year={item.release_date}
          rating={item.vote_average}
          id={item.id}
          type={item.media_type}
        />
      ))}
    </>
  )
}

export default MovieList
