import React from "react";
import styled from "styled-components";

const Highlight = ({ tools, team, startTime, endTime }) => {
  return (
    <Wrapper>
      <h3>Highlight</h3>

      <div className="gridContainer">
        <div className="gridEl">
          <p className="title">My Role</p>
          <p>Product Designer</p>
        </div>
        <div className="gridEl">
          <p className="title">Tools</p>
          <p>{tools}</p>
        </div>
        <div className="gridEl">
          <p className="title">Team</p>
          <p>{team}</p>
        </div>
        <div className="gridEl">
          <p className="title">Skills & Methods</p>
          <p>Experimentation, UX design, UI design, Usability test</p>
        </div>
        <div className="gridEl">
          <p className="title">Time-line</p>
          <p>
            {startTime} - {endTime}.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Highlight;

const Wrapper = styled.section`
  padding: 6rem;
  background-color: #0a102c;

  h3 {
    font-size: 40px;
    margin-bottom: 50px;
  }

  .gridContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    column-gap: 250px;

    .gridEl {
      margin-bottom: 120px;

      .title {
        font-size: 20px;
        font-weight: bold;
        font-family: "gilroysemibold", sans-serif;
        color: #ffffffb2;
        margin-bottom: 40px;
      }
      p {
        font-family: "gilroysemibold", sans-serif;
        font-size: 18px;
      }
    }
  }
`;
