import React, { useContext } from 'react'
import styles from './aside.module.scss'
import strange from '../../assets/p_drstrangeinthemultiverseofmadness_245_476cabb1.jpeg'
import AsideSection from './AsideSection'
import { useNavigate } from 'react-router-dom'
import { SIGNIN, SIGNUP } from '../../routes/RouteConstants'
import MoviesContext from '../../context/MoviesContext'

const newList = [
  {
    id: 1,
    title: 'Dr Strange in the multiverse of madness',
    release_date: '2023-04-01',
    image: strange,
  },
  {
    id: 2,
    title: 'Dr Strange in the multiverse of madness',
    release_date: '2023-04-01',
    image: strange,
  },
  {
    id: 3,
    title: 'Dr Strange in the multiverse of madness',
    release_date: '2023-04-01',
    image: strange,
  },
]

const Aside = () => {
  const { upcoming } = useContext(MoviesContext)
  const navigate = useNavigate()
  return (
    <div className={styles.aside}>
      <div className={styles.user}>
        <button className={styles.signIn} onClick={() => navigate(`${SIGNIN}`)}>
          Sign in
        </button>
        <button className={styles.signUp} onClick={() => navigate(`${SIGNUP}`)}>
          Sign Up
        </button>
      </div>
      <div className={styles.info}>
        <AsideSection title='Upcoming Movies' data={upcoming.slice(0, 3)} />
        <AsideSection title='Watchlist' data={newList} />
      </div>
    </div>
  )
}

export default Aside
