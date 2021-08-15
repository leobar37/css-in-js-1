import React, { HtmlHTMLAttributes, PropsWithChildren } from "react";

import styled from "@emotion/styled";
import { getToken } from "../../../utils";

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

function Container({
  children,
  ...args
}: PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>>) {
  return <Wrapper {...args}>{children}</Wrapper>;
}

export default Container;
