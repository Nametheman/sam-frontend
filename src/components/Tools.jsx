import React from "react";
import styled from "styled-components";
import figma from "../assets/Images/figma.svg";
import photoshop from "../assets/Images/photoshop.svg";
import xd from "../assets/Images/xd.svg";
import after_effect from "../assets/Images/after_effect.svg";
import sketch from "../assets/Images/sketch.svg";
import illustrator from "../assets/Images/illustrator.svg";

const Tools = () => {
  const tools = [
    { name: "Figma", image: figma },
    { name: "Sketch", image: sketch },
    { name: "Adobe XD", image: xd },
    { name: "Photoshop", image: photoshop },
    { name: "Illustrator", image: illustrator },
    { name: "After Effect", image: after_effect },
  ];

  return (
    <Container>
      {tools.map((tool, idx) => {
        return (
          <ToolContainer key={idx * 20}>
            <img src={tool.image} alt="" />
            <p>{tool.name}</p>
          </ToolContainer>
        );
      })}
    </Container>
  );
};

export default Tools;

const Container = styled.div`
  padding: 6rem 0 6rem;
  display: flex;
  justify-content: space-between;
`;
const ToolContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  img {
    width: 70px;
    height: 70px;
  }
  p {
    font-family: "gilroysemibold", sans-serif;
    font-size: 19px;
  }
`;
