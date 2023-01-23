import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
import styles from './sidebar.module.scss'

import {
  MdSlowMotionVideo,
  MdVideoLibrary,
  MdMovie,
  MdOndemandVideo,
  MdPerson,
  MdPeople,
} from 'react-icons/md'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.content}>
        <Logo />
        <div className={styles.sidebarSection}>
          <h5>Menu</h5>
          <ul>
            <li>
              <NavLink to={'home'}>
                <MdSlowMotionVideo size={30} /> Browse
              </NavLink>
            </li>
            <li>
              <NavLink to={'movies'}>
                <MdMovie size={30} /> Movies
              </NavLink>
            </li>
            <li>
              <NavLink to={'shows'}>
                <MdOndemandVideo size={30} /> TV Shows
              </NavLink>
            </li>
            <li>
              <NavLink to={'watchlist'}>
                {' '}
                <MdVideoLibrary size={30} />
                Watchlist
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.sidebarSection}>
          <h5>Social</h5>
          <ul>
            <li>
              <NavLink to={'profile'}>
                {' '}
                <MdPerson size={30} /> Profile
              </NavLink>
            </li>
            <li>
              <NavLink to={'friends'}>
                <MdPeople size={30} /> People
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.signout}>Sign out</p>
    </div>
  )
}

export default Sidebar
