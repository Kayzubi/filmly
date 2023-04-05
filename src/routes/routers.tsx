import { Navigate, Route, Routes } from 'react-router-dom'
import SignIn from '../views/SignUp/SignIn'
import SIgnUp from '../views/SignUp/SIgnUp'
import { SIGNIN, SIGNUP } from './RouteConstants'
import Dashboard from '../views/Dashboard/Dashboard'

const Routers = () => {
  return (
    <Routes>
      <Route path='/*' element={<Dashboard />} />
      <Route path={SIGNUP} element={<SIgnUp />} />
      <Route path={SIGNIN} element={<SignIn />} />
      <Route path='/' element={<Navigate to='home' />} />
    </Routes>
  )
}

export default Routers
