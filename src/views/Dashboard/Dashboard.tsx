import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import { motion } from 'framer-motion'

import Helmet from '../../components/Helmet/Helmet'
import Hero from '../../components/Hero/Hero'
import MovieList from '../../components/MovieList/MovieList'
import AnimatedDiv from '../../components/Shared/AnimatedDiv'

const Dashboard = () => {
  return (
    <Helmet title='Home'>
      <AnimatedDiv>
        <div className='dashboard'>
          <Hero />
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}>
            <Container>
              <Row>
                <Col lg='12'>
                  <h3 className='heading__section'>Trending Movies</h3>
                </Col>
                <MovieList />
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
                <MovieList />
                <Col lg='3'>
                  <div className='moreBtn'>
                    <button>See more</button>
                  </div>
                </Col>
              </Row>
            </Container>
          </motion.section>
        </div>
      </AnimatedDiv>
    </Helmet>
  )
}

export default Dashboard
