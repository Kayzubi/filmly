import React, { useContext } from 'react'
import { Container, Row, Col } from 'reactstrap'
import MoviesContext from '../../context/MoviesContext'

import { motion } from 'framer-motion'

import Helmet from '../../components/Helmet/Helmet'
import Hero from '../../components/Hero/Hero'
import MovieList from '../../components/MovieList/MovieList'
import AnimatedDiv from '../../components/Shared/AnimatedDiv'
import Loader from '../../components/Loader/Loader'

const Dashboard = () => {
  const { movies, tvshows, loading, upcoming } = useContext(MoviesContext)
  const random = Math.floor(Math.random() * 10)

  return (
    <Helmet title='Home'>
      <AnimatedDiv>
        {loading ? (
          <div className='page-center'>
            <Loader />
          </div>
        ) : (
          <div className='dashboard'>
            <Hero data={upcoming[random]} />

            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}>
              <Container>
                <Row>
                  <Col lg='12'>
                    <h3 className='heading__section'>Trending Movies</h3>
                  </Col>
                  <MovieList data={movies.slice(0, 14)} />
                  <Col lg='3'>
                    <div className='moreBtn'>
                      <button>See more</button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </motion.section>
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}>
              <Container>
                <Row>
                  <Col lg='12'>
                    <h3 className='heading__section'>Trending TV Shows</h3>
                  </Col>
                  <MovieList data={tvshows.slice(0, 14)} />
                  <Col lg='3'>
                    <div className='moreBtn'>
                      <button>See more</button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </motion.section>
          </div>
        )}
      </AnimatedDiv>
    </Helmet>
  )
}

export default Dashboard
