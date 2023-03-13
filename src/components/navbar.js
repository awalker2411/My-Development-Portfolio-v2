import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function topNav(){
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Anthony Walker
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">About Me</Nav.Link>
                        <Nav.Link href="#features">Portfolio</Nav.Link>
                        <Nav.Link href="#pricing">Contact Me</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}