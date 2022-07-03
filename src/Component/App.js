import React from 'react'
import PokemonHome from './PokemonHome'
import Home from '../Pages/Home'
import { Routes, Route} from 'react-router-dom'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import { Container } from 'semantic-ui-react'

 function App() {


  return (
    <Container>
      <Routes>
      <Route path='home' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      </Routes> 
      <PokemonHome /> 
     
   
    </Container>
  )
}
export default App

