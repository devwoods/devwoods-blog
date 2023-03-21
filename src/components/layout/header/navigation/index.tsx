import Link from "next/link";
import { NAV_LIST } from "src/configs/nav-list";

import { Container, NavItem } from "./style";

export default function Navigation() {
  return (
    <Container>
      {NAV_LIST.map((item) => (
        <Link key={item.path} href={item.path}>
          <NavItem>{item.name}</NavItem>
        </Link>
      ))}
    </Container>
  );
}
