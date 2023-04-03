import { FC } from 'react'
import { Col } from 'reactstrap'
import styles from './movieCard.module.scss'

import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

interface Props {
  title: string
  year: string
  rating: number
  image: any
  id: number
  type: string
}

const MovieCard: FC<Props> = ({ title, year, rating, image, id, type }) => {
  const navigate = useNavigate()
  return (
    <Col lg='2' md='6'>
      <motion.div
        onClick={() => navigate(`/${type}/${id}`)}
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
