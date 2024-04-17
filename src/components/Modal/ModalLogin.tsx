import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { createPortal } from "react-dom";

import useModalLogin from "@/hooks/useModalLogin";
import Button from "@shared/Button";
import Flex from "@shared/Flex";

declare global {
  interface Window {
    Kakao: any;
  }
}

const ModalLogin = () => {
  const { isOpen, onClose } = useModalLogin();

  const handleClose = () => {
    onClose();
  };

  const $portalRoot = document.getElementById("root-portal");

  if (!$portalRoot) return null;

  return createPortal(
    <>
      {isOpen && (
        <Container>
          <Flex
            align="center"
            position="relative"
            justify="flex-end"
            css={flexStyles}>
            <h2 css={h2Styles}>구글계정으로 바로 시작</h2>
            <Button title="닫기" onClick={handleClose} />
          </Flex>
          <Flex align="center" justify="center">
            <Button title="구글 로그인" />
          </Flex>
        </Container>
      )}
    </>,
    $portalRoot,
  );
};

const Container = styled.div`
  width: min(600px, 90%);
  padding: 20px;
  border-radius: 10px;
  border: 2px solid black;
  background-color: white;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const flexStyles = css`
  width: 100%;
  gap: 8px;
`;

const h2Styles = css`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export default ModalLogin;
