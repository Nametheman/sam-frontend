// import React from "react";
import styled from "styled-components";
import logo from "../assets/Images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavContainer>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="links">
        <Link to="">About</Link>
        <Link to="">My Resume</Link>
        <Link to="">Contact me</Link>
      </div>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  padding: 30px;
  .logo {
    img {
      width: 150px;
      height: 150px;
    }
  }

  .links {
    margin-left: 5rem;

    a {
      margin-right: 5rem;
      color: #ffffffb2;
      text-decoration: none;
      font-weight: 500;
      font-size: 20px;
    }
  }
`;
