export type Category =
  | "react"
  | "javascript"
  | "typescript"
  | "html"
  | "css"
  | "next.js"
  | "browser";

export interface PostMatter {
  id: string;
  title: string;
  date: string;
  summary: string;
  category: Category;
}
