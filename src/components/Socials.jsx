// import React from "react";
import styled from "styled-components";
import footerLine from "../assets/Images/footer_line.svg";
import linkedIn from "../assets/Images/linkedIn.svg";
import behance from "../assets/Images/behance.svg";
import twitter from "../assets/Images/twitter.svg";
import instagram from "../assets/Images/instagram.svg";

const Socials = () => {
  return (
    <SocialsWrapper>
      <img src={footerLine} alt="" />
      <div className="socials">
        <a
          href="https://www.linkedin.com/in/samuelakintunde/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedIn} alt="linkedin" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <img src={behance} alt="linkedin" />
        </a>
        <a
          href="https://www.instagram.com/sam_techardent/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="instagram" />
        </a>
        <a
          href="https://twitter.com/sam_techardent"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="twitter" />
        </a>
      </div>
    </SocialsWrapper>
  );
};

export default Socials;

const SocialsWrapper = styled.div`
  margin-top: 60px;

  .socials {
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 30px;

    a {
      text-decoration: none;

      img {
        width: 2.5rem;
      }
    }
  }
`;
