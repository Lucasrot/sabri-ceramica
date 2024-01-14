import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from '../../asset/img/logor.png';
import './styleNavbar.css';

export const Header = () => {
    return (
        <Navbar expand="lg" className='menu' sticky="top">
            <Container>
                <Navbar.Brand href="#Home">
                    <img
                        src={Logo}
                        width="100"
                        height="100"
                        className="d-inline-block align-top pt-3"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='mb-5' />
                <Navbar.Collapse id="basic-navbar-nav" className='collapse'>
                    <Nav className="ml-auto d-flex justify-content-end">
                        <Nav.Link href="#Home">Incio</Nav.Link>
                        <Nav.Link href="#Nosotros">Nosotros</Nav.Link>
                        <Nav.Link href="#Curso">Cursos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}