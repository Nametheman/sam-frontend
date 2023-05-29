import React from "react";
import styled from "styled-components";

const AssistCard = ({ name, image, desc }) => {
  return (
    <CardWrapper>
      <img src={image} alt="" />
      <div className="details">
        <h4>{name}</h4>
        <p>{desc}</p>
      </div>
    </CardWrapper>
  );
};

export default AssistCard;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0a102c;
  padding-bottom: 3rem;
  border-radius: 10px;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-20px);
  }

  .details {
    margin-top: 5rem;
    padding: 0 3rem;

    h4 {
      color: #fff;
      font-size: 30px;
    }
    p {
      margin-top: 5rem;
      color: #ffffffb2;
      font-size: 1.4rem;
      line-height: 2.2;
    }
  }
  img {
  }
`;
