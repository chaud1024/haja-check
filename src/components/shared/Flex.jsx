import styled from "@emotion/styled";
import React from "react";

const Flex = ({ children }) => {
  return <FlexDiv>{children}</FlexDiv>;
};

const FlexDiv = styled.div(({ align, justify, direction }) => ({
  width: "100%",
  display: "flex",
  gap: "8px",
  alignItems: align,
  justifyContent: justify,
  flexDirection: direction,
}));

export default Flex;
