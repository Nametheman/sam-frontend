import React from "react";
import styled from "styled-components";

const Challenge = ({ p1, p2, p3, img }) => {
  return (
    <Container>
      <h3>The Challenge</h3>

      <div className="content">
        <article>
          <p>{p1}</p>
          <p>{p2}</p>
          {p3 && <p>{p3}</p>}
        </article>

        <img src={img} alt="" />
      </div>
    </Container>
  );
};

export default Challenge;

const Container = styled.section`
  background: #ffffff;
  padding: 6rem;

  h3 {
    font-size: 40px;
    margin-bottom: 50px;
    color: #263238;
  }

  .content {
    display: flex;
    gap: 90px;

    article {
      padding: 40px 0 0;

      p {
        color: #000000;
        margin-bottom: 60px;
        font-size: 20px;
        line-height: 1.7;
      }
    }

    img {
      width: 650px;
    }
  }
`;
