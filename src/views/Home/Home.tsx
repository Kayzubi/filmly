import AnimatedRoutes from '../../components/Shared/AnimatedRoutes'
import Aside from '../../components/Aside/Aside'
import Sidebar from '../../components/SIdebar/Sidebar'

import styles from './home.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <Sidebar />
      <main>
        <AnimatedRoutes />
        <div>created by Azubuike Kizito</div>
      </main>
      <Aside />
    </div>
  )
}

export default Home
