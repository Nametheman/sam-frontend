import React from "react";
import styled from "styled-components";

const ProjectBrief = ({ name, info, roleKey, roleVal, otherLink }) => {
  return (
    <BriefContainer>
      <p>brief</p>
      <div className="about">
        <h3>{name}</h3>
        <div>
          <p>{info}</p>
          {roleKey && (
            <>
              <p>
                {roleKey} : {roleVal}
              </p>
              <a href={otherLink}>{otherLink}</a>
            </>
          )}
        </div>
      </div>
    </BriefContainer>
  );
};

export default ProjectBrief;

const BriefContainer = styled.section`
  padding: 6rem;
  p {
    margin-bottom: 20px;
    color: #ffffffb2;
  }
  .about {
    display: flex;
    justify-content: space-between;
    h3 {
      font-size: 40px;
    }
    div {
      p {
        width: 50rem;
        font-size: 16px;
        color: #ffffff;
        margin-bottom: 50px;
      }
      a {
        color: #fdae24;
      }
    }
  }
`;
