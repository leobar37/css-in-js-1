import React from "react";
import styled from "@emotion/styled";
import { Container } from "@app/components/ui/Container";
import { getToken } from "@app/utils";

const Wrapper = styled.div`
  background: ${getToken("colors.primary")};
  height: 80vh;
`;

function Hero() {
  return (
    <Wrapper>
      <Container></Container>
    </Wrapper>
  );
}

export default Hero;
