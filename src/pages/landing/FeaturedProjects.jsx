// import React from "react";
import styled from "styled-components";
import Project from "./Project";
import yellowcard from "../../assets/Images/yellowcard.svg";
import pmb from "../../assets/Images/pmb.svg";
import others from "../../assets/Images/others.svg";
import adashi from "../../assets/Images/adashi.svg";

const FeaturedProjects = () => {
  const projects = [
    {
      name: "Yellow Card Financial",
      link: "https://www.yellowcard.io",
      linkName: "www.yellowcard.io",
      details:
        "Yellow Card is a Fintech company that help customers buy, sell and store bitcoin (BTC) and tether (USDT) in Africa. The platform also allow Africans to send money from one country to another using the blockchain technology.",
      btnText: "Read more",
      availability: "",
      img: yellowcard,
      path: "/projects/yellow-card",
    },
    {
      name: "PayMyBills",
      link: "https://www.paymybills.ng",
      linkName: "www.paymybills.ng",
      details:
        "PayMyBills is a platform that allows customers to conveniently pay their essential bills while also keeping track of their expenditures.",
      btnText: "Read Case Study",
      availability: "Bot & Available on Web",
      img: pmb,
      path: "/projects/pmb",
    },
    {
      name: " Adashi Esusu Akawo",
      link: "www.adashiesusuakawo.com",
      details:
        "Adashi is a platform that enables users to save money as a group or individually and receive payments at a predetermined period.",
      btnText: "Read Case Study",
      availability: "Available on Web and Mobile",
      img: adashi,
      path: "/projects/adashi",
    },
    {
      name: "Other UI/UX Projects ",
      link: "",
      details:
        "Adashi is a platform that enables users to save money as a group or individually and receive payments at a  predetermined period.",
      btnText: "Read Case Study",
      availability: "Available on Web and Mobile",
      img: others,
      path: "/projects/other-projects",
    },
  ];
  return (
    <Wrapper>
      <h3>Featured Projects</h3>
      <hr />
      {projects.map((project, idx) => {
        const { name, link, details, btnText, availability, img, path } =
          project;
        return (
          <div key={idx}>
            <Project
              name={name}
              link={link}
              details={details}
              btnText={btnText}
              availability={availability}
              img={img}
              path={path}
            />
          </div>
        );
      })}
    </Wrapper>
  );
};

export default FeaturedProjects;

const Wrapper = styled.div`
  h3 {
    font-family: "gilroyregular", sans-serif;
    font-size: 2.7rem;
    margin-bottom: 1.2rem;
    line-height: 2.3;
  }
  hr {
    border: 1px solid #fdae24;
    margin-bottom: 1.2rem;
  }
`;
