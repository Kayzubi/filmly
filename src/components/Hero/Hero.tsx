import { FC } from 'react'
import { MdPlayCircle } from 'react-icons/md'
import styles from './hero.module.scss'

import { motion } from 'framer-motion'
import { HeroDataType } from '../../@types/movies'
import Ratings from '../Rating/Rating'

interface Props {
  data: HeroDataType
}

const Hero: FC<Props> = ({ data }) => {
  console.log(data)
  return (
    <section className={styles.hero}>
      <div className={styles.coverImage}>
        <img
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          alt=''
        />
        <div></div>
        <div></div>
      </div>
      <div className={styles.heroDetails}>
        <div>
          <h4 className={styles.type}>movie</h4>

          <h1>{data.title}</h1>
          <div className={styles.desc}>
            <p>{data.overview}</p>
          </div>
          <span>{data.release_date}</span>
          <Ratings rating={data.vote_average} />
        </div>
        <span>
          <motion.button whileTap={{ scale: 1.2 }} className='watchBtn'>
            Watch <MdPlayCircle />
          </motion.button>
        </span>
      </div>
    </section>
  )
}

export default Hero
