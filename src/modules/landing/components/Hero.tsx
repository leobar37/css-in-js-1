import React from "react";
import styled from "@emotion/styled";
import { Heading } from "@app/components/typography";
import { getToken } from "@app/utils";
import { Container } from "@app/components/Container";
const Wrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 800px;
  background: ${getToken("colors.primary")};
  color: ${getToken("colors.white")};
`;

function Hero() {
  return (
    <Wrapper>
      <Container>
        <Heading size="9xl">hello world</Heading>
      </Container>
    </Wrapper>
  );
}

export default Hero;
