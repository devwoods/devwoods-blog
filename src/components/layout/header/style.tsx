import styled from "styled-components";

import { HEADER_HEIGHT, BREAK_POINTS } from "src/configs/layout";

export const Container = styled.div`
  width: 100vw;
  height: ${HEADER_HEIGHT}px;
  padding: 0px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 2px 7px #e6e6e6;
  z-index: 99;
  @media screen and (max-width: ${BREAK_POINTS.md}px) {
    justify-content: center;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoTitle = styled.h2`
  color: #38761dff;
`;
