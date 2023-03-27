import styled from "styled-components";

import { BREAK_POINTS } from "src/configs/layout";
import { COLORS } from "src/configs/theme";

export const Container = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 16px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 1px 1px 5px #e6e6e6, -1px -1px 5px #e6e6e6;
  &:hover {
    cursor: pointer;
    transform: scale(1.025);
    transition: all 0.5s;
  }

  @media screen and (max-width: ${BREAK_POINTS.md}px) {
    flex-direction: column;
    height: 320px;
  }
`;

export const InfoBox = styled.div`
  width: 70%;
  padding: 16px;
  @media screen and (max-width: ${BREAK_POINTS.md}px) {
    width: 100%;
    height: 60%;
  }
`;

export const ImageBox = styled.div`
  position: relative;
  width: 30%;
  height: 100%;
  @media screen and (max-width: ${BREAK_POINTS.md}px) {
    width: 100%;
    height: 40%;
    background-color: #f0f0f0;
  }
`;

export const Date = styled.p`
  margin: 0px;
  color: #8c8c8c;
  font-size: 14px;
`;

export const Title = styled.h2`
  font-size: clamp(1rem, 2.5vw, 2rem);
  color: ${COLORS.primary.dark};
  margin-top: 4px;
`;

export const Summary = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  line-height: 1.2rem;
  font-size: clamp(0.5rem, 1.5vw, 1rem);
  @media screen and (max-width: ${BREAK_POINTS.md}px) {
    -webkit-line-clamp: 5;
    line-height: 1rem;
  }
`;
