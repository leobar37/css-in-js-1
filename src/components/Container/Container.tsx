import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { get } from "lodash";

const Wrapper = styled.div<{ size: "md" | "sm" | "lg" | "fluid" }>`
  max-width: 1500px;
  ${(props) =>
    props.size == "sm" &&
    css`
      max-width: ${get(props.theme, "sizes.container.sm")} !important;
    `}
  ${(props) =>
    props.size == "fluid" &&
    css`
      max-width: 100vw !important;
    `}
`;

export default Wrapper;
