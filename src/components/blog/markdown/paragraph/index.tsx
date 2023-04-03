import type { ReactNode } from "react";
import styled from "styled-components";

interface IParagraph {
  children: ReactNode;
}

export default function Paragraph({ children }: IParagraph) {
  return <Container>{children}</Container>;
}

const Container = styled.p`
  line-height: 1.5rem;
`;
