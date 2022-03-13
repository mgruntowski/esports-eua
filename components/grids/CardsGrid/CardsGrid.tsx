import type { CardsGridProps } from "./types";

import * as Styled from "./styles";
import Icon from "@mdi/react";

export default function CardsGrid({ data }: CardsGridProps): JSX.Element {
  return (
    <Styled.GridContainer>
      {data.map((data, index) => (
        <Styled.GridBox key={index}>
          <Styled.CardTitle>{data.title}</Styled.CardTitle>

          <Styled.CardText>{data.text}</Styled.CardText>

          <Icon path={data.icon} size="10rem" />
        </Styled.GridBox>
      ))}
    </Styled.GridContainer>
  );
}
