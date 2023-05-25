// import React from 'react'
import styled from "styled-components";
import yellowcard from "../../assets/Images/yellowcard.svg";
import Button from "../../components/Button";

const Project = ({ img, name, link, details, btnText, availability }) => {
  return (
    <Container>
      <div className="imageWrapper">
        <img src={img} alt="project_image" />
      </div>
      <div className="projectDetailWrapper">
        <h3>{name}</h3>
        <p className="project_link">
          •
          <span>
            <a href={link} target="_blank">
              {link}
            </a>
          </span>
        </p>

        <p className="about">About</p>
        <article>{details}</article>
        <p className="availability">
          •<span>{availability}</span>
        </p>
        <div className="buttonWrapper">
          <Button name={btnText} path="/" fontSize={10} />
        </div>
      </div>
    </Container>
  );
};

export default Project;

const Container = styled.section`
  display: flex;
  margin-top: 9.5rem;
  gap: 5.2rem;
  .imageWrapper {
    img {
      width: 700px;
      /* height: 800px; */
    }
  }
  .projectDetailWrapper {
    h3 {
      font-family: "gilroymedium", sans-serif;
      font-size: 40px;
      margin-bottom: 0;
    }
    .project_link {
      color: #fdae24;
      font-family: "gilroysemibold", sans-serif;
      font-size: 20px;
      margin-top: -1rem;
      span {
        a {
          margin-left: 9px;
          color: #fdae24;
          text-decoration: underline;
          font-size: 20px;
          letter-spacing: 1.3px;
        }
      }
    }
    .about {
      font-family: "gilroybold", sans-serif;
      margin: 3rem 0 1rem;
      color: #ffffffb2;
      font-size: 18px;
    }
    article {
      font-family: "gilroybold", sans-serif;
      font-size: 20px;
      letter-spacing: 1.1px;
      line-height: 2.2;
    }
    .availability {
      color: #ffffffb2;
      font-family: "gilroysemibold", sans-serif;
      font-size: 20px;
      margin-top: 3rem;

      span {
        margin-left: 9px;
        font-size: 20px;
        letter-spacing: 1.3px;
      }
    }
    .buttonWrapper {
      margin-top: 4rem;
    }
  }
`;
