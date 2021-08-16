import React from "react";
import styled from "@emotion/styled";
import { Container } from "@app/components/Container";
import Hero from "./components/Hero";
const Wrapper = styled.div``;

function Home() {
  return (
    <Wrapper>
      <Hero />
    </Wrapper>
  );
}

export default Home;
