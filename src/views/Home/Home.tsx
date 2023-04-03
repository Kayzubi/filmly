import AnimatedRoutes from '../../components/Shared/AnimatedRoutes'
import Sidebar from '../../components/SIdebar/Sidebar'
import styles from './home.module.scss'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className={styles.home}>
      <Sidebar />
      <main className='main'>
        <AnimatedRoutes />
        <Footer />
      </main>
    </div>
  )
}

export default Home
