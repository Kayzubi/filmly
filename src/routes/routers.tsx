import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../views/Home/Home'
import SignIn from '../views/SignUp/SignIn'
import SIgnUp from '../views/SignUp/SIgnUp'
import { SIGNIN, SIGNUP } from './RouteConstants'

const Routers = () => {
  return (
    <Routes>
      <Route path='/*' element={<Home />} />
      <Route path={SIGNUP} element={<SIgnUp />} />
      <Route path={SIGNIN} element={<SignIn />} />
      <Route path='/' element={<Navigate to='home' />} />
    </Routes>
  )
}

export default Routers
