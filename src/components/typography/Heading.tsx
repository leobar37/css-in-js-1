import styled from "@emotion/styled";
import { getToken } from "@app/utils";
import { FontSize } from "@app/theme";
import { get } from "lodash";
const Heading = styled.h1<{ size?: FontSize }>`
  font-family: ${getToken("fonts.heading")};
  font-size: ${(props) => get(props.theme, `fontSizes[${props.size}]`)};
`;

Heading.defaultProps = {
  size: "lg",
};
export default Heading;
