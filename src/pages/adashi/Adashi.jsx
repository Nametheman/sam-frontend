import React from "react";
import styled from "styled-components";
import ProjectHero from "../../components/ProjectHero";
import adashiImg from "../../assets/Images/adashiHero.svg";
import ProjectBrief from "../../components/ProjectBrief";
import Highlight from "../../components/highlight";
import Challenge from "../../components/Challenge";
import adashiChallenge from "../../assets/Images/adashiChallenge.svg";

const Adashi = () => {
  return (
    <div>
      <ProjectHero
        img={adashiImg}
        title="ADASHI"
        info="A platfrom to save/contribute money as a group 
or individual and get paid automatically."
        link1="Website"
        link2="Mobile"
      />
      <ProjectBrief
        name="About Adashi"
        info="Adashi is a platform that allows users to save money as a group or individually and receive payments at a pre-determined time set by the user via the platform."
      />
      <Highlight
        tools="Figma, Illustrator, Photoshop"
        team="Ifeoluwa Oduse, Samuel Akintunde"
        startTime="Aug"
        endTime="Oct. 2021, 8 weeks"
      />
      <Challenge
        p1="A lot of Nigerians understand one cliche, which is 'saving for the rainy day,'' an expression used to convey how important it is to save. It's surprising to find that Nigerians do not save as much as believed. According to the International Monetary Fund, the gross saving rate in Nigeria stands at 15%, far below China at 49%, and even below other African countries."
        p2="While growing up, I saw a lot of government workers in Nigeria trying
      to save with friends at work but ended up having issues when they were
      expected to collect their money from the person/individual holding the
      money."
        img={adashiChallenge}
      />
    </div>
  );
};

export default Adashi;
