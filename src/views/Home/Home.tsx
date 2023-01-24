import AnimatedRoutes from '../../components/Shared/AnimatedRoutes'
import Aside from '../../components/Aside/Aside'
import Sidebar from '../../components/SIdebar/Sidebar'

import styles from './home.module.scss'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className={styles.home}>
      <Sidebar />
      <main>
        <AnimatedRoutes />
        <Footer />
      </main>
      <Aside />
    </div>
  )
}

export default Home
