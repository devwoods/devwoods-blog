import styled from "styled-components";

import { COLORS } from "src/configs/theme";
import { BREAK_POINTS } from "src/configs/layout";

export const Container = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: ${BREAK_POINTS.md}px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  font-weight: 600;
  color: ${COLORS.primary.dark};
  font-size: clamp(1.5rem, 1.5vw, 2rem);
  padding: 8px;
  border-radius: 10px;
  &:hover {
    background-color: ${COLORS.primary.light};
  }
`;
