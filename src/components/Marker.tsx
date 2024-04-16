import styled from "@emotion/styled";

import { Coordinate } from "@models/haja";

interface MarkerProps {
  coordinate: Coordinate;
  number: number;
}

const Marker = ({ coordinate, number }: MarkerProps) => {
  return (
    <MarkerDiv coordinate={coordinate}>
      <span>{number}</span>
    </MarkerDiv>
  );
};

const MarkerDiv = styled.div<{ coordinate: Coordinate }>`
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
