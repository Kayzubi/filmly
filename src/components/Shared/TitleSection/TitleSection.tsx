import React, { FC } from 'react'
import Ratings from '../../Rating/Rating'
import styles from './titleSection.module.scss'
import { MdPlayCircle, MdLibraryAdd } from 'react-icons/md'
import Button from '../../Button/Button'

interface Props {
  data: any
}

const TitleSection: FC<Props> = ({ data }) => {
  const {
    poster_path,
    title,
    name,
    vote_average,
    tagline,
    release_date,
    genres,
    credits,
    created_by,
    homepage,
    id,
  } = data

  const year = new Date(release_date).getFullYear()

  // const video = videos.results.find((item: any) => item.type === 'Trailer')
  return (
    <div className={styles.titleSection}>
      {/* {video && (
        <div
          style={{
            position: 'fixed',
            width: '100%',
            maxWidth: '400px',
            height: '40%',
          }}>
          <iframe
            height='100%'
            width='100%'
            style={{ border: 'none' }}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            src={`https://youtube.com/embed/${video.key}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1`}></iframe>
        </div>
      )} */}
      <h1>{title ?? name}</h1>
      <p>{tagline}</p>
      <div className={styles.genres}>
        {genres.map((item: any) => (
          <span>{item.name}</span>
        ))}
      </div>
      <span>{year}</span>
      <Ratings rating={vote_average} />
      <div className={styles.cta}>
        <Button text='Watch' className='watchBtn' icon={<MdPlayCircle />} />
        <Button
          text='Add to Watchlist'
          className='moreBtn'
          icon={<MdLibraryAdd />}
        />
      </div>
    </div>
  )
}

export default TitleSection
