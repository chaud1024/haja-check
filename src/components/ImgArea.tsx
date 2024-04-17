import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

import useModalAdd from "@/hooks/useModalAdd";
import { Coordinate } from "@models/haja";
import Marker from "./Marker";

const ImgArea = () => {
  const [coordinate, setCoordinate] = useState<Coordinate>({
    coordinateX: null,
    coordinateY: null,
  });

  const [coordinateList, setCoordinateList] = useState(
    JSON.parse(localStorage.getItem("coordinates") as string) || [],
  );

  const areaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    localStorage.setItem("coordinates", JSON.stringify(coordinateList));
  }, [coordinateList]);

  const modalAdd = useModalAdd();

  const mouseClick = (e: any) => {
    modalAdd.onOpen();

    const areaRect = areaRef?.current?.getBoundingClientRect();

    const newCoordinate = {
      coordinateX:
        areaRect && ((e.clientX - areaRect.left) / areaRect.width) * 100,
      coordinateY:
        areaRect && ((e.clientY - areaRect.top) / areaRect.height) * 100,
    };

    setCoordinate(newCoordinate as Coordinate);
    setCoordinateList([...coordinateList, newCoordinate]);
  };

  return (
    <Area id="area" onClick={mouseClick} ref={areaRef}>
      <img src="./img.png" alt="" />
      {coordinateList?.map((coordinate: Coordinate, index: number) => (
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

  & img {
    width: 100%;
  }
`;

export default ImgArea;
