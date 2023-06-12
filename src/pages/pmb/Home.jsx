import React from "react";
import ProjectBrief from "../../components/ProjectBrief";
import ProjectHero from "../../components/ProjectHero";
import pmbImg from "../../assets/Images/pmbHero.svg";
import Highlight from "../../components/highlight";
import Challenge from "../../components/Challenge";
import pmbChallenge from "../../assets/Images/pmbChallenge.svg";

const PMB = () => {
  return (
    <div>
      <ProjectHero
        img={pmbImg}
        title="PAYMYBILLS"
        info="A platfrom for users to pay their essential bills
and track their spending record."
        link1="Website"
        link2="BOT"
      />
      <ProjectBrief
        name="About  PayMyBills"
        info="PayMyBills is a platform that allows users to pay for their essential bills easily and also makes it easy for them to track their spending history. The product is a BOT solution that allow users to make bills payment using What'sApp."
      />
      <Highlight
        tools="Figma, Illustrator"
        team="Samuel Akintunde"
        startTime="July"
        endTime="Aug. 2021, 4 weeks"
      />
      <Challenge
        p1="Paying vital payments has become a part of our daily lives. In Nigeria, it appears that a larger proportion of the population pays for airtime, data, or cable on a daily basis. Most people find the procedure of making payments difficult since they must either go to their bank or use a POS."
        p2="Furthermore, many people spend a lot of money on services like airtime and data without even realizing how much they have spent over time."
        p3="Note: PayMyBills is a BOT solution, and the stakeholders made the decision to also design a web platform to allow users to perform the same transaction and also add more features."
        img={pmbChallenge}
      />
    </div>
  );
};

export default PMB;
