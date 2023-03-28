import styled from "styled-components";

import { BREAK_POINTS } from "src/configs/layout";
import { COLORS } from "src/configs/theme";

export const Container = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  padding: 20px 16px;
  cursor: pointer;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 1px 1px 5px #e6e6e6, -1px -1px 5px #e6e6e6;

  @media screen and (max-width: ${BREAK_POINTS.md}px) {
    flex-direction: column;
    height: 320px;
  }
`;

export const ColumnBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FlexBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoBox = styled.div`
  width: 70%;
  padding: 16px;
  @media screen and (max-width: ${BREAK_POINTS.md}px) {
    width: 100%;
    height: 60%;
  }
`;

export const Title = styled.h2`
  font-size: clamp(1rem, 2.5vw, 2rem);
  color: ${COLORS.primary.dark};
  margin: 0;
`;

export const Category = styled.p`
  color: ${COLORS.primary.main};
`;

export const Date = styled.p`
  margin: 0px;
  color: #8c8c8c;
  font-size: 14px;
`;

export const Summary = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow-wrap: break-word;
  font-size: clamp(0.5rem, 1.5vw, 1rem);
  @media screen and (max-width: ${BREAK_POINTS.md}px) {
    -webkit-line-clamp: unset;
    line-height: 1.25rem;
  }
`;

export const ReadMoreBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const ReadMoreBtn = styled.button`
  border: none;
  padding: 1rem;
  cursor: pointer;
  border-radius: 1rem;
  font-size: clamp(0.5rem, 1.5vw, 1rem);
  color: ${COLORS.primary.dark};
  font-weight: 600;
  background-color: #fff;
  @media screen and (max-width: ${BREAK_POINTS.md}px) {
    padding: 0.5rem;
  }
`;
