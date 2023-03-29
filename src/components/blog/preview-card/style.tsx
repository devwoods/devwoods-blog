import styled from "styled-components";

import { BREAK_POINTS } from "src/configs/layout";
import { COLORS } from "src/configs/theme";

export const Container = styled.div`
  height: 300px;
  padding: 20px 16px;
  border-radius: 12px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 1px 1px 5px #e6e6e6, -1px -1px 5px #e6e6e6;
  &:hover {
    h2 {
      color: ${COLORS.primary.main};
    }
  }
`;

export const ColumnBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const RowBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  color: #262626;
  margin: 0;
`;

export const Category = styled.h2`
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  font-weight: 500;
  color: #666;
`;

export const Date = styled.p`
  margin: 0px;
  color: #8c8c8c;
  font-size: clamp(0.8rem, 1.5vw, 1rem);
`;

export const Summary = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-height: 1.6rem;
  font-size: clamp(0.5rem, 1.5vw, 1rem);
  @media screen and (max-width: ${BREAK_POINTS.md}px) {
    -webkit-line-clamp: 5;
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
  color: #666;
  cursor: pointer;
  font-weight: 700;
  border-radius: 1rem;
  background-color: #fff;
  font-size: clamp(0.5rem, 1.5vw, 1rem);
  &:hover {
    color: ${COLORS.primary.main};
  }
  @media screen and (max-width: ${BREAK_POINTS.md}px) {
    padding: 0.5rem;
  }
`;
