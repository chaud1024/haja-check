import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

function App() {
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

  console.log(coordinateList);

  return (
    <Container>
      <TransformWrapper initialScale={1} minScale={1} maxScale={10}>
        <TransformComponent>
          <Area id="area" onClick={mouseClick} ref={areaRef}>
            <img src="./img.png" alt="" />
            {coordinateList?.map((coordinate, index) => (
              <Pointer key={index} coordinate={coordinate} />
            ))}
          </Area>
        </TransformComponent>
      </TransformWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: min(1200px, 100%);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Area = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
  margin: 0 auto;
`;

const Pointer = styled.div`
  width: 10px;
  height: 10px;
  background-color: tomato;
  position: absolute;
  top: calc(${(props) => props.coordinate.coordinateY}% - 5px);
  left: calc(${(props) => props.coordinate.coordinateX}% - 5px);
`;

export default App;
