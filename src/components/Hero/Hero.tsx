import { FC } from 'react'
import { MdPlayCircle } from 'react-icons/md'
import styles from './hero.module.scss'

import { motion } from 'framer-motion'
import { TrendingTypes } from '../../@types/movies'

interface Props {
  data: TrendingTypes
}

const Hero: FC<Props> = ({ data }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.coverImage}>
        <img
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          alt=''
        />
        <div></div>
      </div>
      <div className={styles.heroDetails}>
        <div>
          {data.media_type && (
            <h4 className={styles.type}>{data.media_type}</h4>
          )}
          <h1>{data.title}</h1>
          <div className={styles.desc}>
            <p>{data.overview}</p>
          </div>
        </div>
        <span>
          <motion.button whileTap={{ scale: 1.2 }} className={styles.watchBtn}>
            Watch <MdPlayCircle />
          </motion.button>
        </span>
      </div>
    </section>
  )
}

export default Hero
