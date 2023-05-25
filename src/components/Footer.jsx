// import React from 'react'
import styled from "styled-components";
import Socials from "./Socials";
import Button from "./Button";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer">
        <div className="f1">
          <div className="f1_content">
            <h1>Let’s get to work</h1>
            <p>
              Thank you for taking the time to read about me. Please feel free{" "}
              <br />
              to contact me at any time if you have any queries or would want to{" "}
              <br /> discuss new opportunities.
            </p>
            <p className="calendly">
              or book a time with me via call using my calendly link{" "}
              <a href="#">here.</a>
            </p>
          </div>
          <div className="btnWrapper">
            <Button name="Send a message" path="/" />
          </div>
        </div>
        <Socials />
      </div>
      <div className="copyright">
        <p>Copyright @ 2023 || Samuel Akintunde</p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  padding: 0 5rem;
  .copyright {
    text-align: center;
    padding: 8rem 0 5rem;
  }
  .footer {
    background-color: #0a102c;
    border-radius: 20px;
    color: #ffffffb2;
    padding: 8rem 6rem 5rem;
    .f1 {
      display: flex;
      .f1_content {
        flex: 1.5;
        h1 {
          color: #ffffff;
          font-size: 60px;
          margin-bottom: 30px;
        }
        p {
          line-height: 2.2;
          font-size: 20px;
        }
        .calendly {
          margin-top: 50px;

          a {
            color: #fdae24;
          }
        }
      }
      .btnWrapper {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        a {
          background-color: #fdae24;
          padding: 24px 35px;
          color: #fff;
          font-size: 22px;
          font-family: "gilroylight", sans-serif;
          border-radius: 8px;
        }
      }
    }
    .f2 {
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
    }
  }
`;
