import type { NextPage } from "next";
import styled from "styled-components";

import { COLORS } from "src/configs/theme";

const About: NextPage = () => {
  return (
    <Container>
      <ContentWrapper>
        <Mountain />
        <TextContainer>
          <Title>데브숲은</Title>
          <Content>지식 공유를 통해 함께 성장하여</Content>
          <Content>숲을 이루고 있습니다.</Content>
          <Content>데브숲은 다음 3가지의 지식을 중점적으로 공유합니다.</Content>
          <StrongContent>1. 웹 개발의 근간이 되는 기본 기술</StrongContent>
          <StrongContent>2. 함께 성장하는 팀 문화 만들기</StrongContent>
          <StrongContent>3. 끊임없는 자기계발을 위한 태도</StrongContent>
        </TextContainer>
      </ContentWrapper>
    </Container>
  );
};

export default About;

const Container = styled.div``;
const ContentWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const TextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  top: 30px;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Title = styled.h1`
  color: ${COLORS.primary.dark};
  font-size: clamp(2rem, 3vw, 4rem);
`;

const Content = styled.p`
  font-size: clamp(1rem, 1.5vw, 2rem);
`;

const StrongContent = styled.p`
  font-weight: 600;
  font-size: clamp(1rem, 1.5vw, 2rem);
`;

const Mountain = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  border-bottom: clamp(350px, 100vw, 500px) solid ${COLORS.primary.light};
  border-top: clamp(35px, 5vw, 500px) solid transparent;
  border-left: clamp(175px, 50vw, 250px) solid transparent;
  border-right: clamp(175px, 50vw, 250px) solid transparent;
`;
