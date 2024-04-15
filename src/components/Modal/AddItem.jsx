import styled from "@emotion/styled";
import React, { useState } from "react";
import useModal from "../../hooks/useModal";
import Button from "../shared/Button";
import Flex from "../shared/Flex";

const AddItem = ({ setHaja }) => {
  const [value, setValue] = useState("");
  const [selectedCate, setSelectedCate] = useState("");
  const { isOpen, onClose } = useModal();

  const cateList = [
    "현관",
    "거실",
    "침실1",
    "침실2",
    "침실3",
    "주방/식당",
    "발코니1",
    "발코니2",
    "실외기실",
    "욕실1",
    "욕실2",
  ];

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleCateChange = (e) => {
    setSelectedCate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHaja = {
      cate: selectedCate,
      description: value,
    };

    setHaja((prev) => [...prev, newHaja], setValue(""), setSelectedCate(""));
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <AddItemModal>
          <Flex>
            <h2 style={{ flexGrow: 1, textAlign: "center" }}>
              하자내용 입력하기
            </h2>
            <Button title="닫기" onClick={handleClose} />
          </Flex>

          <Flex>
            <Select
              name="cate"
              onChange={handleCateChange}
              value={selectedCate}>
              <option>위치 선택</option>
              {cateList.map((cate) => (
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
        </AddItemModal>
      )}
    </>
  );
};

const AddItemModal = styled.div`
  width: min(600px, 90%);
  padding: 20px;
  border-radius: 10px;
  border: 2px solid black;
  background-color: white;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
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

export default AddItem;
