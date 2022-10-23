import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

export function NavBar() {
  const links = [
    { name: 'Logos', href: '#logos' },
    { name: 'Colors', href: '#colors' },
    { name: 'Typography', href: '#typography' },
    { name: 'Grid', href: '#grid' },
    { name: 'Graphics', href: '#graphics' },
  ]

  return (
    <Navbar collapseOnSelect sticky='top' expand="lg" bg='light' >
      <Container>
        <Navbar.Brand href="#">Electrify Style Guide</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {links.map((link) => (
              <Nav.Link href={link.href} key={link.name}>{link.name}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}