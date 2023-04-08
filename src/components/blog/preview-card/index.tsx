import Link from "next/link";
import Image from "next/image";
import {
  Container,
  ColumnBox,
  Category,
  Title,
  Summary,
  Date,
  RowBox,
  ImageBox,
  ReadMoreBtnWrapper,
  ReadMoreBtn,
} from "./style";

interface PostPreviewCardProps {
  id: string;
  title: string;
  date: string;
  summary: string;
  category: string;
  thumb_nail: string;
}

export default function PostPreviewCard({
  id,
  title,
  date,
  summary,
  category,
  thumb_nail,
}: PostPreviewCardProps) {
  return (
    <Link href={`/blog/posts/${id}`}>
      <Container>
        <ColumnBox>
          <ImageBox>
            <Image
              src={thumb_nail}
              alt="google chrome"
              layout="fill"
              objectFit="contain"
            />
          </ImageBox>

          <Title>{title}</Title>

          <Summary>{summary}</Summary>
        </ColumnBox>

        <RowBox>
          <Category>{category}</Category>
          <Date>{date}</Date>
        </RowBox>
      </Container>
    </Link>
  );
}
