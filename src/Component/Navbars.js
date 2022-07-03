import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link} from 'react-router-dom'



  function Navbars() {

  // let imgUrl = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/9038defb-5494-46f2-a66d-e84678fbfa33/d83jgkl-7486af7c-2689-4de5-845e-c9515c0ddbe0.png/v1/fill/w_800,h_310,strp/pokemon_png_pack_by_kaylor2013_d83jgkl-fullview.png"
  return (
  
    <div className='menunav'>
      <div className='header'>
      


      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
          <Nav.Link as={Link} to={"home"} >Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
            <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
          </Nav>
         
        </Container>
      </Navbar> 
      
            {/* <img src={imgUrl}/> */}
            
        </div>
     
    </div>
  )
}

export default Navbars