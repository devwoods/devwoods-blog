import Image from "next/image";
import { Container, LogoWrapper, LogoTitle } from "./style";

export default function Header() {
  return (
    <Container>
      <LogoWrapper>
        <Image
          src="/images/devwoods-logo.png"
          width={60}
          height={60}
          alt="logo"
        />
        <LogoTitle>DEVWOODS</LogoTitle>
      </LogoWrapper>
    </Container>
  );
}
