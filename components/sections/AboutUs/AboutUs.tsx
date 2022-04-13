import { Col, Row, Section, SectionContent } from "components/skeleton";
import { HighlightText, SectionText } from "components/typography";

import * as Styled from "./styles";

export default function AboutUs(): JSX.Element {
  return (
    <Section
      id="quem-somos"
      background="linear-gradient(180deg, rgba(0,0,0,1) 30%, rgba(18,18,18,1) 100%)"
      padding="10rem 0"
    >
      <SectionContent>
        <Row alignItems="center" gap="18%">
          <Col flex={0.5}>
            <Styled.CustomTitle>
              A assessoria que você precisa para competir no topo
            </Styled.CustomTitle>
          </Col>
          <Col>
            <SectionText>
              Somos uma agência de intercâmbio esportivo. Assessoramos jovens players em busca da
              melhor oportunidade de estudo (graduação e mestrado) aliado a jogar competitivamente,
              ajudando em todo o processo rumo ao Estados Unidos.
            </SectionText>

            <SectionText>
              <HighlightText>
                Seja descoberto por um coach e ganhe uma proposta para competir em alto nível!
              </HighlightText>
            </SectionText>
          </Col>
        </Row>
      </SectionContent>
    </Section>
  );
}
