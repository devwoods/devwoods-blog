import Image from "next/image";
import Link from "next/link";
import { Container, LogoWrapper, LogoTitle } from "./style";

export default function Header() {
  return (
    <Container>
      <Link href="/">
        <LogoWrapper>
          <Image
            src="/images/devwoods-logo.png"
            width={60}
            height={60}
            alt="logo"
          />
          <LogoTitle>DEVWOODS</LogoTitle>
        </LogoWrapper>
      </Link>
    </Container>
  );
}
