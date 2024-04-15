import styled from "@emotion/styled";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import ImgArea from "./components/ImgArea";
import List from "./components/List/List";

function App() {
  return (
    <Container>
      <TransformWrapper initialScale={1} minScale={1} maxScale={10}>
        <TransformComponent>
          <ImgArea />
        </TransformComponent>
      </TransformWrapper>
      <List />
    </Container>
  );
}

const Container = styled.div`
  width: min(1200px, 100%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;
