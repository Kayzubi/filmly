import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TitleSection from '../../components/Shared/TitleSection/TitleSection'
import { getData } from '../../context/RequestActions'
const API_KEY: string = process.env.REACT_APP_TMBD_API_KEY as string

const MovieDetails = () => {
  const [info, setInfo] = useState<any>()
  const [cast, setCast] = useState<any>()
  const [recomended, setRecomended] = useState<any>()

  const { id } = useParams()

  useEffect(() => {
    async function getMovieInfo() {
      const [movie, credit, related] = await Promise.all([
        getData(`/movie/${id}?api_key=${API_KEY}&language=en-US`),
        getData(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`),
        getData(
          `/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
        ),
      ])

      setInfo(movie)
      setCast(credit)
      setRecomended(related)
      console.log(info)
      console.log(cast)
      console.log(recomended)
    }

    getMovieInfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  return (
    <div>
      <TitleSection />
    </div>
  )
}

export default MovieDetails
