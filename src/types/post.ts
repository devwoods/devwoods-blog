export type Category =
  | "React"
  | "Javascript"
  | "Typescript"
  | "HTML"
  | "CSS"
  | "Next.js"
  | "Browser";

export interface PostMatter {
  id: string;
  title: string;
  date: string;
  summary: string;
  category: Category;
}
