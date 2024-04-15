import styled from "@emotion/styled";
import React from "react";

const Button = ({ title, onClick }) => {
  return <Btn onClick={onClick}>{title}</Btn>;
};

const Btn = styled.button`
  padding: 8px;
  border-radius: 5px;
  border: 2px solid black;
  background-color: white;
  pointer: cursor;
`;

export default Button;
