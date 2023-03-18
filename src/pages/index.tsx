import type { NextPage, GetStaticPropsContext } from "next";
import type { PostMatter } from "src/types/post";

import { useState, useEffect } from "react";
import fs from "fs";
import dayjs from "dayjs";
import matter from "gray-matter";
import styled from "styled-components";

import { BREAK_POINTS } from "src/configs/layout";
import PostPreviewCard from "src/components/blog/preview-card";

interface HomeProps {
  posts: string[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  const [postMatters, setPostMatters] = useState<PostMatter[]>([]);

  useEffect(() => {
    const matters = posts.map((post) => {
      const data = matter(post).data;

      return {
        ...data,
        date: dayjs(data.date).format("YYYY-MM-DD"),
      } as PostMatter;
    });

    setPostMatters(matters);
  }, [posts]);

  return (
    <GridLayout>
      {postMatters.map((post) => (
        <PostPreviewCard
          key={post.id}
          id={post.id}
          title={post.title}
          date={post.date}
          summary={post.summary}
        />
      ))}
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
  grid-gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: ${BREAK_POINTS.md}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
