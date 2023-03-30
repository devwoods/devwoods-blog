import type { NextPage } from "next";
import type { PostMatter } from "src/types/post";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";
import matter from "gray-matter";
import styled from "styled-components";

import { useInfiniteScroll } from "react-use-intersection-observer-pack";

import { getLatestPosts } from "src/apis/post";
import { category_list } from "src/configs/post";
import { COLORS } from "src/configs/theme";
import { BREAK_POINTS } from "src/configs/layout";
import PostPreviewCard from "src/components/blog/preview-card";

interface HomeProps {
  posts: string[];
}

const DEFAULT_PAGE_SIZE = 5;

const Home: NextPage<HomeProps> = ({ posts }) => {
  const rootElRef = useRef<HTMLDivElement | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [postMatters, setPostMatters] = useState<PostMatter[][]>([[]]);
  const [postList, setPostList] = useState<PostMatter[]>([]);

  const { observedTargetRef } = useInfiniteScroll({
    hasMore,
    onLoadMore: () => setCurrentPage((prev) => prev + 1),
  });

  useEffect(() => {
    const post_matters = posts.map((post) => {
      const data = matter(post).data;
      return {
        ...data,
        date: dayjs(data.date).format("YYYY-MM-DD"),
      } as PostMatter;
    });

    let one_matters: PostMatter[] = [];
    let paginated_matters: PostMatter[][] = [];

    post_matters.forEach((matter, i) => {
      one_matters.push(matter);
      if ((i + 1) % DEFAULT_PAGE_SIZE === 0) {
        paginated_matters.push(one_matters);
        one_matters = [];
      }
    });

    if (one_matters.length > 0) {
      paginated_matters.push(one_matters);
    }

    setPostMatters(paginated_matters);
  }, [posts]);

  useEffect(() => {
    if (currentPage >= postMatters.length) {
      setHasMore(false);
      return;
    }

    setPostList((prev) => [...prev, ...postMatters[currentPage]]);
  }, [currentPage, postMatters]);

  return (
    <Container>
      <Section>
        <Title>Cateogries</Title>
        <CategoryWrapper>
          {category_list.map((category, index) => (
            <Link key={index} href={`/blog/category/${category}`}>
              <Chip>{category}</Chip>
            </Link>
          ))}
        </CategoryWrapper>
      </Section>
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
