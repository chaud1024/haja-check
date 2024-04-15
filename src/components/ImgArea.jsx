import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import Marker from "./Marker";

const ImgArea = () => {
  const [coordinate, setCoordinate] = useState({
    coordinateX: null,
    coordinateY: null,
  });

  const [coordinateList, setCoordinateList] = useState(
    JSON.parse(localStorage.getItem("coordinates")) || [],
  );

  const areaRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("coordinates", JSON.stringify(coordinateList));
  }, [coordinateList]);

  const mouseClick = (e) => {
    const areaRect = areaRef.current.getBoundingClientRect();

    const newCoordinate = {
      coordinateX: ((e.clientX - areaRect.left) / areaRect.width) * 100,
      coordinateY: ((e.clientY - areaRect.top) / areaRect.height) * 100,
    };

    setCoordinate(newCoordinate);
    setCoordinateList([...coordinateList, newCoordinate]);
  };

  return (
    <Area id="area" onClick={mouseClick} ref={areaRef}>
      <img src="./img.png" alt="" />
      {coordinateList?.map((coordinate, index) => (
        <Marker
          key={index}
          coordinate={coordinate}
          number={Number(index) + 1}
        />
      ))}
    </Area>
  );
};

const Area = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
  margin: 0 auto;
`;

export default ImgArea;
