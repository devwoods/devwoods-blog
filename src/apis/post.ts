import fs from "fs";
import matter from "gray-matter";

export const getBlogPosts = () => {
  const files = fs.readdirSync("public/blog/posts/");
  const posts = files.map((filename) => {
    return fs.readFileSync(`public/blog/posts/${filename}`, "utf-8");
  });

  const sorted_by_date_posts = posts.sort((a, b) => {
    const {
      data: { date: a_date },
    } = matter(a);
    const {
      data: { date: b_date },
    } = matter(b);

    const a_time = new Date(a_date).getTime();
    const b_time = new Date(b_date).getTime();

    return b_time - a_time;
  });

  return sorted_by_date_posts;
};
