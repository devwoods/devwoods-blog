import type { ReactNode } from "react";
import styled from "styled-components";

interface ILIBlock {
  children: ReactNode;
}

export default function LiBlock({ children }: ILIBlock) {
  return <Container>{children}</Container>;
}

const Container = styled.li`
  display: list-item;
  margin: 8px 0px;
`;
