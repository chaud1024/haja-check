import styled from "@emotion/styled";
import { useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

import ImgArea from "@components/ImgArea";
import List from "@components/List/List";
import ModalAdd from "@components/Modal/ModalAdd";
import { HajaItem } from "@models/haja";

const Layout = () => {
  const [haja, setHaja] = useState<HajaItem[] | []>([]);

  return (
    <Container>
      <TransformWrapper initialScale={1} minScale={1} maxScale={10}>
        <TransformComponent>
          <ImgArea />
        </TransformComponent>
      </TransformWrapper>
      <ModalAdd setHaja={setHaja} />
      <List haja={haja} />
    </Container>
  );
};

const Container = styled.div`
  width: min(1200px, 100%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Layout;
