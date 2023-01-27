import React, { FC } from 'react'
import styles from './aside.module.scss'

interface Props {
  title: string
  data: any
}

const AsideSection: FC<Props> = ({ title, data }) => {
  return (
    <div className={styles.section}>
      <h3>{title}</h3>

      {data?.map((item: any) => (
        <div key={item.id} className={styles.listItem}>
          <div className={styles.image}>
            <img
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              alt=''
            />
          </div>
          <div>
            <h5>{item.title}</h5>
            <span>{item.release_date}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AsideSection
