import React from "react";
import styled from "styled-components";
import ProjectHero from "../../components/ProjectHero";
import ProjectBrief from "../../components/ProjectBrief";
import otherImg from "../../assets/Images/otherHero.svg";

const Others = () => {
  return (
    <div>
      <ProjectHero
        color="#FDAE24"
        img={otherImg}
        title="OTHER PROJECTS"
        info="This is to showcase some other web design 
projects I have been involved in"
        link1="Website"
        link2="Mobile"
      />
      <ProjectBrief
        name="About  Rent4less"
        info="Rent4Less by Alpha Mead is a rental scheme designed to provide a flexible and convenient option for middle income Nigerians to rent homes. Check out live website here."
        roleKey="Role"
        roleVal="UI/UX designer"
        otherLink="https://rent4less.com.ng"
      />
    </div>
  );
};

export default Others;
