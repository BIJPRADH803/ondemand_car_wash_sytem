import React from 'react'
import { Container, Navbar, Col } from 'react-bootstrap';
function Footer() {
   
      
    return (
        <Navbar fixed="bottom" bg="dark" variant="dark">
          <Container >
               <Col lg={12} className="text-center text-muted">
                     <div>Green Wash Car Wash: An on demand car wash app @2024</div>
                     
                     
               </Col>

               
          </Container>

        </Navbar>
        

    );
}


export default Footer
