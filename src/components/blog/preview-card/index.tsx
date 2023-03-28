import Link from "next/link";
import {
  Container,
  ColumnBox,
  Category,
  Title,
  Summary,
  Date,
  FlexBox,
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
    <Link href={`/blog/posts/${id}`}>
      <Container>
        <ColumnBox>
          <FlexBox>
            <Category>{category}</Category>
            <Date>{date}</Date>
          </FlexBox>

          <Title>{title}</Title>
        </ColumnBox>

        <Summary>{summary}</Summary>
        <ReadMoreBtnWrapper>
          <ReadMoreBtn>Read More</ReadMoreBtn>
        </ReadMoreBtnWrapper>
      </Container>
    </Link>
  );
}
