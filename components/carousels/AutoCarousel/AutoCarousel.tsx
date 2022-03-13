import Image from "next/image";
import * as Styled from "./styles";

import type { AutoCarouselProps } from "./types";

export default function AutoCarousel({ data }: AutoCarouselProps): JSX.Element {
  return (
    <Styled.CarouselWrapper>
      <Styled.CarouselContainer>
        {data.map((data, index) => (
          <Styled.DataContainer key={index}>
            <Image src={data.image} alt={data.name} layout="fill" objectFit="contain" />
          </Styled.DataContainer>
        ))}

        {data.map((data, index) => (
          <Styled.DataContainer key={index}>
            <Image src={data.image} alt={data.name} layout="fill" objectFit="contain" />
          </Styled.DataContainer>
        ))}
      </Styled.CarouselContainer>
    </Styled.CarouselWrapper>
  );
}
