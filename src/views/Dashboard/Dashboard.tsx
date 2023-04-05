import AnimatedRoutes from '../../components/Shared/AnimatedRoutes'
import Sidebar from '../../components/SIdebar/Sidebar'
import styles from './dashboard.module.scss'
import Footer from '../../components/Footer/Footer'

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <main className='main'>
        <AnimatedRoutes />
        <Footer />
      </main>
    </div>
  )
}

export default Dashboard
