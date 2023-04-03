import type { GetStaticPropsContext } from "next";
import styled from "styled-components";

import fs from "fs";
import matter from "gray-matter";
import gfm from "remark-gfm";
import slug from "remark-slug";
import ReactMarkdown from "react-markdown";

import { BREAK_POINTS } from "src/configs/layout";

import Img from "src/components/blog/markdown/img";
import LiBlock from "src/components/blog/markdown/li-block";
import CodeBlock from "src/components/blog/markdown/code-block";
import Paragraph from "src/components/blog/markdown/paragraph";
import BlockquoteBlock from "src/components/blog/markdown/blockquote-block";

interface BlogPostProps {
  post: string;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <Container>
      <ReactMarkdown
        remarkPlugins={[gfm, slug]}
        components={{
          code: CodeBlock,
          li: LiBlock,
          blockquote: BlockquoteBlock,
          img: Img,
          p: Paragraph,
        }}
      >
        {matter(post).content}
      </ReactMarkdown>
    </Container>
  );
}

const Container = styled.div`
  padding: 32px 64px;
  @media screen and (max-width: ${BREAK_POINTS.md}px) {
    padding: 32px 16px;
  }
`;

export async function getStaticProps(context: GetStaticPropsContext) {
  try {
    const post = fs
      .readFileSync(`public/blog/posts/${context.params?.id}.md`)
      .toString();

    return {
      props: { post },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {},
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  try {
    const posts = fs
      .readdirSync("public/blog/posts/")
      .map((file) => file.split(".")[0]);

    const paths = posts
      .filter((file) => file.match(/\.md$/))
      .map((post) => ({
        params: {
          id: post,
        },
      }));

    return { paths, fallback: "blocking" };
  } catch (err) {
    console.error(err);
  }
}
