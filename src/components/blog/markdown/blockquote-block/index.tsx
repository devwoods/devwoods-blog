import type { ReactNode } from "react";
import styled from "styled-components";

import { COLORS } from "src/configs/theme";

interface IBlockquoteBlock {
  children: ReactNode;
}

export default function BlockquoteBlock({ children }: IBlockquoteBlock) {
  return <Container>{children}</Container>;
}

const Container = styled.blockquote`
  padding: 16px;
  margin: 0 auto;
  border-radius: 12px;
  background-color: ${COLORS.divider.main};
`;
