import { FC } from 'react'
import { Col } from 'reactstrap'
import styles from './movieCard.module.scss'

interface Props {
  title: string
  year: string
  rating: string
  image: any
}

const MovieCard: FC<Props> = ({ title, year, rating, image }) => {
  return (
    <Col lg='3'>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img src={image} alt='' />
        </div>
        <div className={styles.cardDetails}>
          <h3 className={styles.title}>{title}</h3>
          <div>
            <span className={styles.year}>{year}</span>
            <span className={styles.rating}>
              {rating}
              <span>/10</span>
            </span>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default MovieCard
