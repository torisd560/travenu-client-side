
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import logo from '../../images/headerLogo.png'
import './Header.css'


const Header = () => {
  const { user, logOut } = useAuth()

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className='p-3'>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" style={{ width: '200px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto custom-nav align-items-center">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            {user?.email ? <>
              <Nav.Link as={Link} to="/myOrders">MyOrders</Nav.Link>
              <Nav.Link as={Link} to="/manageOrders">All Orders</Nav.Link>
              <Nav.Link as={Link} to="/addService">Add Service</Nav.Link>
              <span className='custom-text-primary me-3 fw-bold'><i className="fas fa-user me-2"></i>{user?.displayName}</span>
              <Button onClick={logOut} className=' px-2 text-white custom-login-btn'><i className="fas fa-sign-out-alt me-1"></i>LogOut</Button>
            </>
              :
              <Nav.Link as={Link} to="/Login">
                <Button className=' px-2 text-white custom-login-btn '> <i className="fas fa-sign-in-alt me-1"></i>Login</Button>
              </Nav.Link>}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;