import useModalLogin from "@/hooks/useModalLogin";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Button from "./Button";
import Flex from "./Flex";

const NavBar = () => {
  const modalLogin = useModalLogin();

  const handleClick = () => {
    modalLogin.onOpen();
  };
  return (
    <NavBarContainer>
      <Flex justify="space-between" align="center">
        <Link to="/">하자! 체크</Link>
        <div>
          <Button title="로그인" onClick={handleClick} />
          <Link to="/mypage">000님</Link>
        </div>
      </Flex>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.header`
  width: 100%;
  padding: 8px 16px;
  border-bottom: 2px solid black;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 10;
`;

export default NavBar;
