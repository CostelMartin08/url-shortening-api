import React from 'react'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import LinkArea from './components/LinkArea'
import { Container } from 'react-bootstrap'
import Statistics from './components/Statistics'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Banner />

      <Container className='bg-gray'>

        <LinkArea />
        <Statistics />

      </Container>

      <Footer />
    </>

  )
}

export default App



