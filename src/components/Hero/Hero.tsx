import React from 'react'
import { MdPlayCircle } from 'react-icons/md'
import styles from './hero.module.scss'

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.coverImage}>
        <img src='' alt='' />
        <div></div>
      </div>
      <div className={styles.heroDetails}>
        <div>
          <h1>Doctor Strange in the multiverse of madness</h1>
          <div className={styles.genres}>
            <span className={styles.genre}>Adventure</span>
            <span className={styles.genre}>Action</span>
            <span className={styles.genre}>Fantasy</span>
          </div>
        </div>
        <span>
          <motion.button whileTap={{ scale: 1.2 }} className={styles.watchBtn}>
            Watch <MdPlayCircle />
          </motion.button>
        </span>
      </div>
    </section>
  )
}

export default Hero
