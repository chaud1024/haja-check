import { css } from "@emotion/react";
import styled from "@emotion/styled";

import useGoogleLogin from "@hooks/useGoogleLogin";

import Button from "@components/shared/Button";
import Flex from "@components/shared/Flex";

const Login = () => {
  const { login } = useGoogleLogin();

  const $portalRoot = document.getElementById("root-portal");

  if (!$portalRoot) return null;
  return (
    <Container>
      <Flex
        align="center"
        position="relative"
        justify="flex-end"
        css={flexStyles}>
        <h2 css={h2Styles}>구글계정으로 바로 시작</h2>
      </Flex>
      <Flex align="center" justify="center">
        <Button title="구글 로그인" onClick={login} />
      </Flex>
    </Container>
  );
};

const Container = styled.div`
  width: min(600px, 90%);
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

export default Login;
