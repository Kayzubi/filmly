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
  const mainLinks = [
    {
      to: 'home',
      icon: <MdSlowMotionVideo />,
      text: 'Browse',
    },
    {
      to: 'movies',
      icon: <MdMovie />,
      text: 'Movies',
    },
    {
      to: 'tv',
      icon: <MdOndemandVideo />,
      text: 'TV Shows',
    },
    {
      to: 'watchlist',
      icon: <MdVideoLibrary />,
      text: 'Watchlist',
    },
  ]

  return (
    <div className={styles.sidebar}>
      <div className={styles.content}>
        <Logo />
        <div className={styles.sidebarSection}>
          <h5>Menu</h5>
          <ul>
            {mainLinks.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : ''
                  }>
                  {item.icon} {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.sidebarSection}>
          <h5>Social</h5>
          <ul>
            <li>
              <NavLink to={'profile'}>
                <MdPerson /> Profile
              </NavLink>
            </li>
            <li>
              <NavLink to={'friends'}>
                <MdPeople /> People
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
