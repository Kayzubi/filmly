import { FC } from 'react'
import { Col } from 'reactstrap'
import styles from './movieCard.module.scss'

import { motion } from 'framer-motion'

interface Props {
  title: string
  year: string
  rating: number
  image: any
}

const MovieCard: FC<Props> = ({ title, year, rating, image }) => {
  return (
    <Col lg='3'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        className={styles.card}>
        <div className={styles.cardImage}>
          <img src={`https://image.tmdb.org/t/p/original${image}`} alt='' />
        </div>
        <div className={styles.cardDetails}>
          <h3 className={styles.title}>{title}</h3>
          <div>
            <span className={styles.year}>{year}</span>
            <span className={styles.rating}>
              {rating.toFixed(1)}
              <span>/10</span>
            </span>
          </div>
        </div>
      </motion.div>
    </Col>
  )
}

export default MovieCard
