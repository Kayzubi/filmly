import React, { FC } from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa'
import styles from './rating.module.scss'

interface Prop {
  rating: number
}

const Ratings: FC<Prop> = ({ rating }) => {
  const ratingPercent = (rating / 10) * 100
  return (
    <div className={styles.rating}>
      <div className={styles.empty}>
        <span>
          <FaRegStar />
        </span>
        <span>
          <FaRegStar />
        </span>
        <span>
          <FaRegStar />
        </span>
        <span>
          <FaRegStar />
        </span>
        <span>
          <FaRegStar />
        </span>
      </div>
      <div className={styles.filled} style={{ width: `${ratingPercent}%` }}>
        <span>
          <FaStar />
        </span>
        <span>
          <FaStar />
        </span>
        <span>
          <FaStar />
        </span>
        <span>
          <FaStar />
        </span>
        <span>
          <FaStar />
        </span>
      </div>
    </div>
  )
}

export default Ratings
