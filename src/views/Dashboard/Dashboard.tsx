import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Helmet from '../../components/Helmet/Helmet'
import Hero from '../../components/Hero/Hero'
import MovieList from '../../components/MovieList/MovieList'

const Dashboard = () => {
  return (
    <Helmet title='Home'>
      <div className='dashboard'>
        <Hero />
        <section>
          <Container>
            <Row>
              <Col lg='12'>
                <h3 className='heading__section'>Trending Movies</h3>
              </Col>
              <MovieList />
            </Row>
          </Container>
        </section>
      </div>
    </Helmet>
  )
}

export default Dashboard
