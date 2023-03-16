import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import logo from '../assets/logo.png'
import Resume from '../assets/Resume.pdf'

export default function TopNav(){
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Anthony Walker
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">About Me</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#contact">Contact Me</Nav.Link>
                        <Nav.Link href={Resume} target='_blank'>Resume</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}