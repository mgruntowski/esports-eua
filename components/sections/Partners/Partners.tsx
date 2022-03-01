import Image from "next/image";

import { Row, Section, SectionContent } from "components/skeleton";
import { SectionTitle } from "components/typography";

import partners from "./partners.json";

import * as Styled from "./styles";

export default function Partners(): JSX.Element {
  return (
    <Section background="white">
      <SectionContent data-floating-title="Partners" floatingTitleColor="#000000">
        <Row>
          <SectionTitle>Parceiros</SectionTitle>
        </Row>

        <Row>
          <Styled.ImagesGrid>
            {partners.map((partner, index) => (
              <Styled.ImageContainer key={index} width={partner.width}>
                <Image src={partner.image} alt={partner.name} layout="fill" objectFit="contain" />
              </Styled.ImageContainer>
            ))}
          </Styled.ImagesGrid>
        </Row>
      </SectionContent>
    </Section>
  );
}
