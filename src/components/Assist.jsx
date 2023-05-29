import React from "react";
import styled from "styled-components";
import AssistCard from "./AssistCard";
import assist1 from "../assets/Images/assist1.svg";
import assist2 from "../assets/Images/assist2.svg";
import assist3 from "../assets/Images/assist3.svg";
import assist4 from "../assets/Images/assist4.svg";

const Assist = () => {
  const assistInfo = [
    {
      name: "UI/UX Design",
      image: assist1,
      details:
        "I generate UI/UX design strategies and concepts based on customer needs as a product designer. Working collaboratively with stakeholders and product owners to provide insight into user behaviour, guide focus and planning, and develop product features.",
      id: "as1",
    },
    {
      name: "Graphics Design",
      image: assist2,
      details:
        "As a visual designer, my goal is to shape and improve the user experience by taking into account the effects of illustrations, photography, typography, space, layouts, and color on the usability and aesthetic appeal of products.",
      id: "as2",
    },
    {
      name: "Motion Graphics",
      image: assist3,
      details:
        "I have a background in traditional graphic design and have learnt to incorporate time, music, and space into my present skill set. I make use of After Effect and Adobe Premier pro.",
      id: "as3",
    },
    {
      name: "Brand Design",
      image: assist4,
      details:
        "As a brand designer, I collaborate with clients to determine what picture or mood they want to convey and then produce graphics to establish a brand identity for their company.",
      id: "as4",
    },
  ];
  return (
    <Container>
      <h3>How can I assist you:</h3>

      <div className="gridElWrapper">
        {assistInfo.map((assist, idx) => {
          return (
            <AssistCard
              key={assist.id}
              id={assist.id}
              image={assist.image}
              name={assist.name}
              desc={assist.details}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Assist;
const Container = styled.section`
  margin-top: 14rem;
  h3 {
    color: #fff;
    font-size: 2.7rem;
    margin-bottom: 4rem;
  }

  .gridElWrapper {
    display: grid;
    grid-gap: 14rem;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 450px), 1fr));
  }
`;
