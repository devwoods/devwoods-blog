import type { NextPage } from "next";
import type { Category, PostMatter } from "src/types/post";

import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";
import matter from "gray-matter";
import styled from "styled-components";

import { useInfiniteScroll } from "react-use-intersection-observer-pack";

import { getPostsByCategory } from "src/apis/post";
import { category_list } from "src/configs/post";
import { BREAK_POINTS } from "src/configs/layout";
import PostPreviewCard from "src/components/blog/preview-card";

interface BlogProps {
  posts: string[];
}

const DEFAULT_PAGE_SIZE = 5;

const PostsByCategory: NextPage<BlogProps> = ({ posts }) => {
  const rootElRef = useRef<HTMLDivElement | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [postMatters, setPostMatters] = useState<PostMatter[][]>([[]]);
  const [postList, setPostList] = useState<PostMatter[]>([]);

  const router = useRouter();

  const { observedTargetRef } = useInfiniteScroll({
    hasMore,
    onLoadMore: () => setCurrentPage((prev) => prev + 1),
  });

  useEffect(() => {
    // console.log(router);
    // const posts = getPostsByCategory("react");
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
  }, []);

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
          category={post.category}
          thumb_nail={post.thumb_nail}
        />
      ))}
      <div ref={observedTargetRef} />
    </GridLayout>
  );
};

const GridLayout = styled.div`
  display: grid;
  margin: 32px 48px;
  grid-gap: 24px;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: ${BREAK_POINTS.md}px) {
    margin: 24px 12px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export async function getStaticPaths() {
  const paths = category_list.map((category) => {
    return {
      params: {
        category,
      },
    };
  });
  return { paths, fallback: "blocking" };
}

export async function getStaticProps(context: {
  params: { category: Category };
}) {
  const { params } = context;
  try {
    const posts = getPostsByCategory(params.category);

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

export default PostsByCategory;
