import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import AuthButtons from './Auth/AuthButtons';
import { useAuth0 } from '@auth0/auth0-react';

function Header(){
  const { isAuthenticated } = useAuth0();
 
    return (
      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {isAuthenticated &&
          <NavItem><Link to="/profile" className="nav-link">User Profile</Link></NavItem>
        }
        <AuthButtons className={'Auth'} />
      </Navbar>
      
    )
  }


export default Header;
