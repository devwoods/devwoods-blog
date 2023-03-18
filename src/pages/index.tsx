import type { NextPage } from "next";
import styled from "styled-components";

import { BREAK_POINTS } from "src/configs/layout";
import PostPreviewCard from "src/components/blog/preview-card";

const Home: NextPage = () => {
  return (
    <GridLayout>
      <PostPreviewCard />
      <PostPreviewCard />
      <PostPreviewCard />
      <PostPreviewCard />
    </GridLayout>
  );
};

export default Home;

const GridLayout = styled.div`
  display: grid;
  margin-top: 24px;
  grid-gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: ${BREAK_POINTS.md}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
