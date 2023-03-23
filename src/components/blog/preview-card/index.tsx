import Image from "next/image";
import Link from "next/link";
import { Container, InfoBox, Title, Summary, Date, ImageBox } from "./style";

interface PostPreviewCardProps {
  id: string;
  title: string;
  date: string;
  summary: string;
  thumbnail_image_url?: string;
}

export default function PostPreviewCard({
  id,
  title,
  date,
  summary,
  thumbnail_image_url,
}: PostPreviewCardProps) {
  return (
    <Link href={`/blog/posts/${id}`}>
      <Container>
        <ImageBox>
          <Image
            src={
              thumbnail_image_url
                ? thumbnail_image_url
                : "/images/devwoods-logo.png"
            }
            width={150}
            height={150}
            alt="logo"
          />
        </ImageBox>
        <InfoBox>
          <Date>{date}</Date>
          <Title>{title}</Title>
          <Summary>{summary}</Summary>
        </InfoBox>
      </Container>
    </Link>
  );
}
