import styled from "styled-components";

import { COLORS } from "src/configs/theme";
import { HEADER_HEIGHT, BREAK_POINTS } from "src/configs/layout";

export const Container = styled.div`
  width: 100vw;
  max-height: 250px;
  overflow-y: auto;
  position: absolute;
  top: calc(${HEADER_HEIGHT}px - 5px);
  left: 0;
  z-index: 99;
  background-color: #fff;
  box-shadow: 0 2px 7px #e6e6e6;

  display: ${({ open }: { open: boolean }) => (open ? "flex" : "none ")};
  flex-direction: column;

  @media screen and (min-width: ${BREAK_POINTS.md}px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  width: 100%;
  padding: 16px;
  font-weight: 600;
  color: ${COLORS.primary.dark};
  font-size: clamp(1.5rem, 1.5vw, 2rem);
  &:hover {
    background-color: ${COLORS.primary.light};
  }
`;
