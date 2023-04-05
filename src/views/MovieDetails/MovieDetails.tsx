import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Background from '../../components/BackgroundImage/Background'
import Loader from '../../components/Loader/Loader'
import TitleSection from '../../components/Shared/TitleSection/TitleSection'
import useGetMovie from '../../hooks/useGetMovie'
import styles from './movieDetails.module.scss'

const MovieDetails = () => {
  const { id } = useParams()

  const { loading, fetchData, data, error } = useGetMovie('movie', id)

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(error)

  if (loading) return <Loader />
  if (error) return <h2>Something Went Wrong</h2>

  return (
    <div className={styles.movieDetails}>
      <Background data={data} />
      <div className={styles.content}>
        <TitleSection data={data} />
      </div>
    </div>
  )
}

export default MovieDetails
