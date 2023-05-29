// import React from "react";
import styled from "styled-components";
import samuel from "../../assets/Images/sam.svg";
import Socials from "../../components/Socials";
import Tools from "../../components/Tools";
import FeaturedProjects from "./FeaturedProjects";

const Home = () => {
  return (
    <Container>
      <Hero>
        <div className="about_wrapper">
          <h3>Hi, my name is</h3>
          <h2>Samuel Akintunde</h2>
          <p>
            An experienced UX designer with 4+ years of experience in designing
            and building mobile and web-based digital products and experiences
            that enable startups as well as established organizations to meet
            business goals
          </p>
          <p>
            Learn <span>more about me</span> or jump straight to my{" "}
            <span>work.</span>
          </p>
          <Socials />
        </div>
        <div className="image_wrapper">
          <img src={samuel} alt="" />
        </div>
      </Hero>
      <FeaturedProjects />
      <Tools />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  color: #fff;
  padding: 1.25rem 3.75rem;
`;

const Hero = styled.section`
  display: flex;
  align-items: center;
  .about_wrapper {
    h3 {
      font-family: "gilroybold", sans-serif;
      font-size: 2.3rem;
      margin-bottom: 1.2rem;
    }
    h2 {
      font-family: "gilroybold", sans-serif;
      font-size: 5.7rem;
      margin-bottom: 1.9rem;
      background: rgb(244, 116, 128);
      background: linear-gradient(
        180deg,
        rgba(244, 116, 128, 1) 0%,
        rgba(244, 127, 128, 1) 62%,
        rgba(50, 50, 50, 0.640515581232493) 100%
      );

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    p {
      font-family: "gilroyregular", sans-serif;
      font-size: 1.2rem;
      margin-bottom: 1.2rem;
      line-height: 2.3;

      span {
        color: #f6b552;
      }
    }
  }
  .image_wrapper {
    display: flex;
    justify-content: flex-start;
  }
`;
