import React from "react";
import styled from "styled-components";
import ProjectHero from "../../components/ProjectHero";
import yellowImg from "../../assets/Images/yelloHero.svg";
import ProjectBrief from "../../components/ProjectBrief";
import Highlight from "../../components/highlight";
import Challenge from "../../components/Challenge";
import yellowChallenge from "../../assets/Images/yelloChallenge.svg";
import yellowbig1 from "../../assets/Images/yellowbig1.svg";
import yellowbig2 from "../../assets/Images/yellowbig2.svg";

const Yellow = () => {
  return (
    <Container>
      <ProjectHero
        title="Yellowcard Financial"
        info="The platform that allows Africans trade crypto using their 
local currency and also send money across borders."
        link1="Website"
        link2="Mobile app"
        img={yellowImg}
      />
      <ProjectBrief
        info="Yellow Card is a Fintech company that help customers buy, sell and store bitcoin (BTC) and tether (USDT) in Africa. The platform also allow Africans to send money from one country to another using the blockchain technology."
        name="About  Yellowcard"
      />
      <Highlight
        tools="Figma"
        team="Samuel Akintunde"
        startTime="Feb 2022"
        endTime="May 2023"
      />
      <Challenge
        p1="I just joined the company in 2022 at a point where the company is trying to secure Series B funding and also rebrand to have a clear brand representation across the 18+ countries where they are operating."
        p2="At this point, the company has a low onboarding conversion rate and also has quite a number of specific issues in the onboarding flow that are country-specific, platform-specific, and also region-specific in Africa."
        img={yellowChallenge}
      />
      <div className="big1">
        <img src={yellowbig1} alt="" />
      </div>
      <div className="big2">
        <img src={yellowbig2} alt="" />
      </div>
    </Container>
  );
};

export default Yellow;

const Container = styled.main`
  .big1 {
    max-width: 100%;
    width: 100%;
    overflow: hidden;
    img {
      overflow: hidden;
      width: 100%;
    }
  }
  .big2 {
    margin-top: -10px;
    max-width: 100%;
    width: 100%;
    img {
      width: 100%;
      overflow: hidden;
    }
  }
`;
