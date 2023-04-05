import React from 'react'
import styles from './background.module.scss'

type Props = {
  data: any
}

const Background = ({ data }: Props) => {
  const { backdrop_path } = data

  return (
    <div className={styles.background}>
      <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt='' />
      <div className={styles.shade}></div>
    </div>
  )
}

export default Background
