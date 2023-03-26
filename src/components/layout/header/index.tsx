import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";

import Navigation from "./navigation";
import MoreMenuBar from "./more-menu-bar";

import {
  Container,
  LogoWrapper,
  LogoTitle,
  MoreIconButton,
  DummyBox,
} from "./style";
import Logo from "../../../../public/devwoods-logo.svg";

export default function Header() {
  const [isOpenMoreMenu, setIsOpenMoreMenu] = useState(false);

  const handleClickMoreIcon = () => {
    setIsOpenMoreMenu((prev) => !prev);
  };
  return (
    <Container>
      <MoreIconButton onClick={handleClickMoreIcon}>
        {isOpenMoreMenu ? (
          <CloseIcon sx={{ fontSize: "2rem" }} />
        ) : (
          <DehazeIcon sx={{ fontSize: "2rem" }} />
        )}
      </MoreIconButton>
      <Link href="/">
        <LogoWrapper>
          <Logo />
          <LogoTitle>DEVWOODS</LogoTitle>
        </LogoWrapper>
      </Link>
      <Navigation />
      <DummyBox />
      <MoreMenuBar open={isOpenMoreMenu} />
    </Container>
  );
}
