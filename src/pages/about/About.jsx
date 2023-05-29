import React from "react";
import styled from "styled-components";
import Assist from "../../components/Assist";
import Tools from "../../components/Tools";

const About = () => {
  return (
    <Container>
      <div className="name">
        <h1>SAMUEL AKINTUNDE</h1>
      </div>
      <article className="backgroundWrapper">
        <h3>Background</h3>
        <p>
          I am Samuel (sam_techardent) Akintunde an experience UI/UX{" "}
          <span>designer</span> presently based in <span>Nigeria</span>. I've
          been working in the design industry for over 4 years. My passion is to
          design interfaces that reflect the perfect equilibrium between users,
          business, and product needs. To achieve that aim, each team member
          must be included in the design process, which will be validated with
          consumers and iterated afterwards. My skillset spans from{" "}
          <span>graphics design</span> to <span>motion design</span> and now{" "}
          <span>user experience design</span>. <br /> <br /> Much of my work has
          been focused on creating better product user experiences. My long-term
          goal is to make technology user-friendly and accessible to all. <br />{" "}
          <br /> I studied Microbiology in college but along the way discovered
          design. My design journey started with <span>graphics design</span>,
          then transitioned into <span>UI design</span> and, finally{" "}
          <span>UX design</span>. Big ideas and brands that create things that
          improve the human experience interest me. I also want to travel to
          different parts of the world to understand more about human culture
          and society. <br /> <br /> Mentoring and passing on expertise to the
          next generation of designers is something I'm very passionate about.
          In my spare time, I enjoy listening to music, eating, watching movies,
          and spending time with friends.
        </p>
      </article>
      <Assist />
      <Tools />
    </Container>
  );
};

export default About;

const Container = styled.section`
  padding: 1.25rem 3.75rem;

  .name {
    text-align: center;
    border-bottom: 1px solid #fdad24d2;
    padding-bottom: 4rem;

    h1 {
      font-size: 5rem;
      letter-spacing: 1.5px;
    }
  }
  .backgroundWrapper {
    margin-top: 6rem;
    display: flex;
    justify-content: space-between;
    gap: 20rem;

    h3 {
      font-size: 2rem;
      letter-spacing: 1.5px;
    }
    p {
      width: 55%;
      letter-spacing: 1.5px;
      line-height: 2.2;
      font-size: 1.2rem;
      color: #ffffffb2;
      font-family: "gilroylight", sans-serif;
      font-weight: 500;

      span {
        color: #fff;
      }
    }
  }
`;
