import { Link } from "react-router-dom";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const Button = ({ path, name }) => {
  return <LinkButton to={path}>{name}</LinkButton>;
};

export default Button;

const LinkButton = styled(Link)`
  background-color: #fdae24;
  padding: 24px 35px;
  color: #fff;
  font-size: ${(props) => props.fontSize};
  font-family: "gilroyregular", sans-serif;
  border-radius: 8px;
  /* font-size: 22px; */
`;
