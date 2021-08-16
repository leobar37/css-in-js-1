import styled from "@emotion/styled";
import { getToken } from "@app/utils";
import { FontSize } from "@app/theme";
import { get } from "lodash";
const Text = styled.p<{ size?: FontSize }>`
  font-family: ${getToken("fonts.body")};
  font-size: ${(props) => get(props.theme, `fontSizes[${props.size}]`)};
`;

Text.defaultProps = {
  size: "md",
};
export default Text;
