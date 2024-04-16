import styled from "@emotion/styled";
import { CSSProperties } from "react";

interface FlexProps {
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  direction?: CSSProperties["flexDirection"];
  position?: CSSProperties["position"];
}

const Flex = styled.div<FlexProps>(
  ({ align, justify, direction, position }) => ({
    display: "flex",
    alignItems: align,
    justifyContent: justify,
    flexDirection: direction,
    position: position,
  }),
);

export default Flex;
