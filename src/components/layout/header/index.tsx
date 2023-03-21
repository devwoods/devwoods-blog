import Image from "next/image";
import Link from "next/link";

import Navigation from "./navigation";
import { Container, LogoWrapper, LogoTitle } from "./style";
import Logo from "../../../../public/devwoods-logo.svg";

export default function Header() {
  return (
    <Container>
      <Link href="/">
        <LogoWrapper>
          <Logo />
          <LogoTitle>DEVWOODS</LogoTitle>
        </LogoWrapper>
      </Link>
      <Navigation />
    </Container>
  );
}
