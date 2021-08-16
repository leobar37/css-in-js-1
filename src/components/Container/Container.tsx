import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { get } from "lodash";
import { ContainerSize } from "@app/theme";
const Container = styled.div<{ size?: ContainerSize }>`
  margin: 0 auto;
  max-width: ${(props) => get(props.theme, `sizes.container[${props.size}]`)};
`;

Container.defaultProps = {
  size: "lg",
};

export default Container;
