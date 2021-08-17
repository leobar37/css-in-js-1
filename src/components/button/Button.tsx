import styled from "@emotion/styled";
import { Theme, css } from "@emotion/react";
import { get } from "lodash";
import { getToken } from "@app/utils";
type Variant = "fill" | "outline";
const perVariant = (variant: Variant, theme: Theme) => {
  switch (variant) {
    case "fill": {
      return css`
        background: ${get(theme, "colors.secondary")};
        border: 2px solid ${get(theme, "colors.secondary")};
        &:hover {
          background: transparent;
          border: 2px solid ${get(theme, "colors.secondary")};
          color: ${get(theme, "colors.white")};
        }
      `;
    }
    case "outline": {
      return css`
        background: transparent;
        color: ${get(theme, "colors.white")};
        border: 2px solid ${get(theme, "colors.secondary")};
        &:hover {
          background: ${get(theme, "colors.secondary")};
          color: ${get(theme, "colors.primary")};
        }
      `;
    }
  }

  return css``;
};

const Button = styled.button<{ variant?: Variant }>`
  border: none;
  outline: none;
  margin: 5px 5px;
  padding: 8px 15px;
  font-family: ${getToken("fonts.body")};
  font-style: italic;
  font-weight: 700;
  font-size: ${getToken("fontSizes.md")};
  ${(props) => perVariant(props.variant!, props.theme)}
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transform: scale(1.08);
  }
`;

Button.defaultProps = {
  variant: "fill",
};

export default Button;
