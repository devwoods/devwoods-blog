import type { ReactNode } from "react";

import Image from "next/image";
import styled from "styled-components";

export default function Img(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <Container>
      <Image src={props.src || ""} alt={props.alt || ""} layout="fill" />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
