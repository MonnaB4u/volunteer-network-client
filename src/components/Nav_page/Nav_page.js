import React, { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { UserContext } from "../../App";
import image from "../../basic material/logos/Group 1329.png";
import "./Nav_page.css";

const Nav_page = () => {
  const [loggedInUser] = useContext(UserContext);

 

  return (
    <div>
      <div className="Nav">
        <Navbar bg="white" variant="">
          <img className="img" src={image} alt="" />

          <Nav className="ml-auto" id="navId">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="*">Donation</Nav.Link>
            <Nav.Link href="collection">Event</Nav.Link>
            <Nav.Link href="*">Blog </Nav.Link>
            <Nav.Link href="login">{loggedInUser.name}</Nav.Link>
            <Button href="/register" variant="primary">Register</Button>{' '}
            <Button  href="/admin" style={{marginLeft:'10px'}} variant="secondary">Admin</Button>{' '}
          </Nav>
        </Navbar>
      </div>
    </div>
  );
};

export default Nav_page;
