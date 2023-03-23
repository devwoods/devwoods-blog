import type { NextPage } from "next";

import {
  Container,
  ContentWrapper,
  TextContainer,
  Mountain,
  Title,
  Content,
  StrongContent,
} from "./style";

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
