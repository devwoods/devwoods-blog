import Link from "next/link";
import {
  Container,
  ColumnBox,
  Category,
  Title,
  Summary,
  Date,
  RowBox,
  ReadMoreBtnWrapper,
  ReadMoreBtn,
} from "./style";

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
    <Container>
      <ColumnBox>
        <RowBox>
          <Category>{category}</Category>
          <Date>{date}</Date>
        </RowBox>
        <Link href={`/blog/posts/${id}`}>
          <Title>{title}</Title>
        </Link>
      </ColumnBox>

      <Summary>{summary}</Summary>
      <ReadMoreBtnWrapper>
        <Link href={`/blog/posts/${id}`}>
          <ReadMoreBtn>Read More</ReadMoreBtn>
        </Link>
      </ReadMoreBtnWrapper>
    </Container>
  );
}
