import React from 'react'
import thor from '../../assets/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'
// import strange from '../../assets/p_drstrangeinthemultiverseofmadness_245_476cabb1.jpeg'
import MovieCard from '../MovieCard/MovieCard'

const data = [
  {
    id: 2,
    title: 'Thor: love and thunder',
    image: thor,
    year: '2022',
    rating: '7.9',
  },
  {
    id: 3,
    title: 'Thor: love and thunder',
    image: thor,
    year: '2022',
    rating: '7.9',
  },
  {
    id: 5,
    title: 'Thor: love and thunder',
    image: thor,
    year: '2022',
    rating: '7.9',
  },
  {
    id: 7,
    title: 'Thor: love and thunder',
    image: thor,
    year: '2022',
    rating: '7.9',
  },
  {
    id: 1,
    title: 'Thor: love and thunder',
    image: thor,
    year: '2022',
    rating: '7.9',
  },
  {
    id: 4,
    title: 'Thor: love and thunder',
    image: thor,
    year: '2022',
    rating: '7.9',
  },
  {
    id: 8,
    title: 'Thor: love and thunder',
    image: thor,
    year: '2022',
    rating: '7.9',
  },
  {
    id: 9,
    title: 'Thor: love and thunder',
    image: thor,
    year: '2022',
    rating: '7.9',
  },
  {
    id: 10,
    title: 'Thor: love and thunder',
    image: thor,
    year: '2022',
    rating: '7.9',
  },
  {
    id: 11,
    title: 'Thor: love and thunder',
    image: thor,
    year: '2022',
    rating: '7.9',
  },
  {
    id: 12,
    title: 'Thor: love and thunder',
    image: thor,
    year: '2022',
    rating: '7.9',
  },
]

const MovieList = () => {
  return (
    <>
      {data.map((item) => (
        <MovieCard
          key={item.id}
          title={item.title}
          image={item.image}
          year={item.year}
          rating={item.rating}
        />
      ))}
    </>
  )
}

export default MovieList
