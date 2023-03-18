import { Container, Content } from "./style";
import Header from "./header";

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  );
}
