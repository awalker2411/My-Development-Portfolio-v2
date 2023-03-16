import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import logo from '../assets/logo.png'
import Resume from '../assets/Resume.pdf'
import { Link } from 'react-router-dom';

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
                        <Link to="/">About Me</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/contact">Contact Me</Link>
                        <Link href={Resume} target='_blank'>Resume</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}