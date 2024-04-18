import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { createPortal } from "react-dom";

import { cateIndex } from "@/constants/cateIndex";
import useModal from "@/hooks/useModalAdd";
import Button from "@shared/Button";
import Flex from "@shared/Flex";

const ModalAdd = ({ setHaja }: any) => {
  const [value, setValue] = useState("");
  const [selectedCate, setSelectedCate] = useState("");
  const { isOpen, onClose } = useModal();

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleCateChange = (e: any) => {
    setSelectedCate(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newHaja = {
      cate: selectedCate,
      description: value,
    };

    setHaja(
      (prev: any) => [...prev, newHaja],
      setValue(""),
      setSelectedCate(""),
    );

    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  const $portalRoot = document.getElementById("root-portal");

  if (!$portalRoot) return null;

  return createPortal(
    <>
      {isOpen && (
        <>
          <Container>
            <Flex
              align="center"
              position="relative"
              justify="flex-end"
              css={flexStyles}>
              <h2 css={h2Styles}>하자내용 입력하기</h2>
              <Button title="닫기" onClick={handleClose} />
            </Flex>

            <Flex css={flexStyles}>
              <Select
                name="cate"
                onChange={handleCateChange}
                value={selectedCate}>
                <option>위치 선택</option>
                {cateIndex.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </Select>
              <Input
                type="text"
                name="description"
                placeholder="내용작성"
                value={value}
                onChange={handleChange}
              />
              <Button title="저장" onClick={handleSubmit} />
            </Flex>
          </Container>
          <Overlay />
        </>
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
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  z-index: 5;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
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

const Select = styled.select`
  padding: 8px;
  padding-top: 9px;
  border-radius: 5px;
  border: 2px solid black;
`;
const Input = styled.input`
  padding: 9px 8px;
  padding-top: 10px;
  border-radius: 5px;
  border: 2px solid black;
  flex-grow: 1;
`;

export default ModalAdd;
