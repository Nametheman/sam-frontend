import React from "react";
import styled from "styled-components";
import testImg from "../assets/Images/pmbHero.svg";
import Button from "./Button";

const ProjectHero = ({
  title,
  info,
  link1,
  link2,
  href1,
  href2,
  img,
  color,
}) => {
  const SectionWrapper = styled.section`
    position: relative;
    background: url(${img}) center/cover no-repeat;
    height: 650px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
    }
  `;

  const SectionContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .ct2 {
      .title {
        color: ${color ? color : "#09cf83"};
        font-family: "gilroysemibold";
        text-align: center;
        font-size: 50px;
        margin-bottom: 2rem;
      }
      .info {
        display: flex;
        align-items: center;
        justify-content: center;
        h3 {
          text-align: center;
          margin-bottom: 2rem;
          font-size: 40px;
          width: 75%;
          line-height: 1.5;
        }
      }

      .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        a {
          background-color: ${color ? color : "#09cf83"};
          width: 180px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          border-radius: 10px;
          font-size: 20px;
        }
      }
    }
  `;

  return (
    <SectionWrapper>
      <SectionContent>
        <div className="ct2">
          <h3 className="title">{title}</h3>
          <div className="info">
            <h3>{info}</h3>
          </div>
          <div className="buttons">
            <a href={href1}>{link1}</a>
            <a href={href2}>{link2}</a>
          </div>
        </div>
      </SectionContent>
    </SectionWrapper>
  );
};

export default ProjectHero;
