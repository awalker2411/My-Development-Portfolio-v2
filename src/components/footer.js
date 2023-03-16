import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import logo from '../assets/logo.png'

export default function Footer() {
    return (
        <Navbar fixed="bottom" bg="dark" variant="dark" className="justify-content-center">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    "I am the Shield Anvil, and I am not yet done." - Itkovian
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}