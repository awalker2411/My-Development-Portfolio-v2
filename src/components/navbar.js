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
                    <Navbar.Brand href="/">
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
                        <Link className="text-bg-primary p-3" to="/">About Me</Link>
                        <Link className="text-bg-primary p-3" to="/portfolio">Portfolio</Link>
                        <Link className="text-bg-primary p-3" to="/contact">Contact Me</Link>
                        <Nav.Link className="text-bg-primary p-3" href={Resume} target='_blank'>Resume</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}