import type { NextPage, GetStaticPropsContext } from "next";
import type { PostMatter } from "src/types/post";

import { useState, useEffect, useRef } from "react";
import fs from "fs";
import dayjs from "dayjs";
import matter from "gray-matter";
import styled from "styled-components";

import { useInfiniteScroll } from "react-use-intersection-observer-pack";

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
    const matters = posts.map((post) => {
      const data = matter(post).data;
      return {
        ...data,
        date: dayjs(data.date).format("YYYY-MM-DD"),
      } as PostMatter;
    });

    let paginatedMatters = [];
    let tempMatters = [];

    matters.forEach((matter, i) => {
      tempMatters.push(matter);
      if ((i + 1) % DEFAULT_PAGE_SIZE === 0) {
        paginatedMatters.push(tempMatters);
        tempMatters = [];
      }
    });

    if (tempMatters.length > 0) {
      paginatedMatters.push(tempMatters);
    }
    setPostMatters(paginatedMatters);
  }, [posts]);

  useEffect(() => {
    if (currentPage >= postMatters.length) {
      setHasMore(false);
      return;
    }

    setPostList((prev) => [...prev, ...postMatters[currentPage]]);
  }, [currentPage, postMatters]);

  return (
    <GridLayout ref={rootElRef}>
      {postList.map((post) => (
        <PostPreviewCard
          key={post.id}
          id={post.id}
          title={post.title}
          date={post.date}
          summary={post.summary}
        />
      ))}
      <div ref={observedTargetRef} />
    </GridLayout>
  );
};

export default Home;

export async function getStaticProps(context: GetStaticPropsContext) {
  try {
    const files = fs.readdirSync("public/blog/posts/");
    const posts = files.map((filename) => {
      return fs.readFileSync(`public/blog/posts/${filename}`, "utf-8");
    });

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

const GridLayout = styled.div`
  display: grid;
  margin-top: 24px;
  grid-gap: 24px;
  grid-template-columns: repeat(1, 1fr);
  @media screen and (max-width: ${BREAK_POINTS.md}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
