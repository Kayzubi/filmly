import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import TitleSection from '../../components/Shared/TitleSection/TitleSection'
import useGetMovie from '../../hooks/useGetMovie'

const MovieDetails = () => {
  const { id } = useParams()

  const { loading, fetchData, data } = useGetMovie('movie', id)

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(data)

  if (loading) return <Loader />

  return (
    <div>
      <TitleSection />
    </div>
  )
}

export default MovieDetails
