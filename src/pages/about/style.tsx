import styled from "styled-components";

import { COLORS } from "src/configs/theme";

export const Container = styled.div``;

export const ContentWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const TextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  top: 30px;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const Title = styled.h1`
  color: ${COLORS.primary.dark};
  font-size: clamp(2rem, 3vw, 4rem);
`;

export const Content = styled.p`
  font-size: clamp(1rem, 1.5vw, 2rem);
`;

export const StrongContent = styled.p`
  font-weight: 600;
  font-size: clamp(1rem, 1.5vw, 2rem);
`;

export const Mountain = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  border-bottom: clamp(350px, 100vw, 500px) solid ${COLORS.primary.light};
  border-top: clamp(35px, 5vw, 500px) solid transparent;
  border-left: clamp(175px, 50vw, 250px) solid transparent;
  border-right: clamp(175px, 50vw, 250px) solid transparent;
`;
