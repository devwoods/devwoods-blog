import type { NextPage } from "next";
import type { PostMatter } from "src/types/post";

import { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";
import matter from "gray-matter";
import styled from "styled-components";

import { useInfiniteScroll } from "react-use-intersection-observer-pack";

import { getBlogPosts } from "src/apis/post";
import { BREAK_POINTS } from "src/configs/layout";
import { COLORS } from "src/configs/theme";
import { category_list } from "src/configs/post";
import PostPreviewCard from "src/components/blog/preview-card";

interface BlogProps {
  posts: string[];
}

const DEFAULT_PAGE_SIZE = 5;

const Blog: NextPage<BlogProps> = ({ posts }) => {
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
      <CategoryWrapper>
        <Title>Category</Title>
        <GridCategoryBox>
          {category_list.map((category) => (
            <CategoryBox key={category}>{category}</CategoryBox>
          ))}
        </GridCategoryBox>
      </CategoryWrapper>
      <GridLayout ref={rootElRef}>
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
        <div ref={observedTargetRef} />
      </GridLayout>
    </Container>
  );
};

export async function getStaticProps() {
  try {
    const posts = getBlogPosts();

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

export default Blog;

const Container = styled.div`
  margin: 24px;
  padding: 16px;
`;

const GridLayout = styled.div`
  display: grid;
  grid-gap: 24px;
  margin-top: 64px;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: ${BREAK_POINTS.md}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px;
`;

const Title = styled.h2``;

const CategoryBox = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${COLORS.primary.dark};
  padding: 12px;
  border-radius: 16px;
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.primary.light};
  }
`;

const GridCategoryBox = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(8, 1fr);
  @media screen and (max-width: ${BREAK_POINTS.md}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
