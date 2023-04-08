import type { NextPage } from "next";
import type { PostMatter } from "src/types/post";

import { useState, useEffect } from "react";
import dayjs from "dayjs";
import matter from "gray-matter";
import styled from "styled-components";

import { getLatestPosts } from "src/apis/post";
import { COLORS } from "src/configs/theme";
import { BREAK_POINTS } from "src/configs/layout";
import PostPreviewCard from "src/components/blog/preview-card";

interface HomeProps {
  posts: string[];
}

const DEFAULT_PAGE_SIZE = 5;

const Home: NextPage<HomeProps> = ({ posts }) => {
  const [postMatters, setPostMatters] = useState<PostMatter[][]>([[]]);
  const [postList, setPostList] = useState<PostMatter[]>([]);

  useEffect(() => {
    const post_matters = posts.map((post) => {
      const data = matter(post).data;
      return {
        ...data,
        date: dayjs(data.date).format("YYYY-MM-DD"),
      } as PostMatter;
    });

    setPostList(post_matters);
  }, [posts]);

  return (
    <Container>
      <Section>
        <Title>최신 게시글</Title>
        <PostWrapper>
          {postList.map((post) => (
            <PostPreviewCard
              key={post.id}
              id={post.id}
              title={post.title}
              date={post.date}
              summary={post.summary}
              category={post.category}
              thumb_nail={post.thumb_nail}
            />
          ))}
        </PostWrapper>
      </Section>
    </Container>
  );
};

export default Home;

export async function getStaticProps() {
  try {
    const posts = getLatestPosts(4);

    return {
      props: { posts },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {},
      notFound: true,
    };
  }
}

const Container = styled.div``;

const Section = styled.section`
  margin-top: 32px;
`;

const Title = styled.h2`
  color: ${COLORS.primary.dark};
`;

const PostWrapper = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: ${BREAK_POINTS.md}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(8, minmax(100px, 120px));
  @media screen and (max-width: ${BREAK_POINTS.md}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Chip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 16px;
  color: ${COLORS.primary.main};
  background-color: ${COLORS.primary.light};
`;
