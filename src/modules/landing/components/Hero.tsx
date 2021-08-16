import React from "react";
import styled from "@emotion/styled";
import { Heading, Text } from "@app/components/typography";
import { getToken } from "@app/utils";
import { Container } from "@app/components/Container";
import NextImage from "next/image";
const Wrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 800px;

  background: ${getToken("colors.primary")};
  color: ${getToken("colors.white")};
  display: flex;
  align-items: center;
  .content {
    width: 100%;
    display: flex;
    flex-direction: row;
    ${Heading} , ${Text} {
      margin: 10px 0;
    }
    &__left {
      max-width: 700px;
    }
    &__image {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
`;

function Hero() {
  return (
    <Wrapper>
      <Container className="content">
        <div className="content__left">
          <Heading size="7xl">Café cajamarquino 100 % natural</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </Text>
        </div>
        <div className="content__image">
          <NextImage
            src={"/hero.png"}
            width={"800px"}
            height={"1000px"}
            objectFit="cover"
          />
        </div>
      </Container>
    </Wrapper>
  );
}

export default Hero;
