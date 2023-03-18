import Image from "next/image";
import { Container, InfoBox, Title, Content, Date } from "./style";

export default function PostPreviewCard() {
  return (
    <Container>
      <Image
        src="/images/devwoods-logo.png"
        width={150}
        height={150}
        alt="logo"
      />
      <InfoBox>
        <Date>2023-03-16</Date>
        <Title>Example</Title>
        <Content>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to usinIt is a long established fact that a reader
          will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to usin
        </Content>
      </InfoBox>
    </Container>
  );
}
