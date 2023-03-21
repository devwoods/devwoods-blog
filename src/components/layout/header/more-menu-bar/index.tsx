import Link from "next/link";
import { Container, NavItem } from "./style";

import { NAV_LIST } from "src/configs/nav-list";

interface MoreMenuBarProps {
  open: boolean;
}

export default function MoreMenuBar({ open }: MoreMenuBarProps) {
  return (
    <Container open={open}>
      {NAV_LIST.map((item) => (
        <Link key={item.path} href={item.path}>
          <NavItem>{item.name}</NavItem>
        </Link>
      ))}
    </Container>
  );
}
