import styled from "@emotion/styled";
import React from "react";

const Marker = ({ coordinate, number }) => {
  return (
    <MarkerDiv coordinate={coordinate}>
      <span>{number}</span>
    </MarkerDiv>
  );
};

const MarkerDiv = styled.div`
  width: 16px;
  height: 16px;
  background-color: tomato;
  border-radius: 50%;
  position: absolute;
  top: calc(${(props) => props.coordinate.coordinateY}% - 5px);
  left: calc(${(props) => props.coordinate.coordinateX}% - 5px);
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    font-size: 12px;
  }
`;

export default Marker;
