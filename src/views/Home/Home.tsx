import { Navigate, Route, Routes } from 'react-router-dom'
import Aside from '../../components/Aside/Aside'
import Sidebar from '../../components/SIdebar/Sidebar'
import {
  HOME,
  MOVIES,
  PROFILE,
  SHOWS,
  WATCHLIST,
} from '../../routes/RouteConstants'
import Dashboard from '../Dashboard/Dashboard'
import styles from './home.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <Sidebar />
      <main>
        <Routes>
          <Route path={HOME} element={<Dashboard />} />
          <Route path={MOVIES} element={<h1>Movies</h1>} />
          <Route path={SHOWS} element={<h1>Shows</h1>} />
          <Route path={PROFILE} element={<h1>Profile</h1>} />
          <Route path={WATCHLIST} element={<h1>Watchlist</h1>} />
          <Route path='*' element={<Navigate to={HOME} />} />
        </Routes>
      </main>
      <Aside />
    </div>
  )
}

export default Home
