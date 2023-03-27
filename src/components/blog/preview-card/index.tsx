import Image from "next/image";
import Link from "next/link";
import { Container, InfoBox, Title, Summary, Date, ImageBox } from "./style";

interface PostPreviewCardProps {
  id: string;
  title: string;
  date: string;
  summary: string;
  category: string;
}

export default function PostPreviewCard({
  id,
  title,
  date,
  summary,
  category,
}: PostPreviewCardProps) {
  return (
    <Link href={`/blog/posts/${id}`}>
      <Container>
        <Date>{category}</Date>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Summary>{summary}</Summary>
      </Container>
    </Link>
  );
}
