import { Col, Row, Section, SectionContent } from "components/skeleton";
import { HighlightText, SectionText, SectionTitle } from "components/typography";

import * as Styled from "./styles";

export default function Hero(): JSX.Element {
  return (
    <Styled.CustomSection>
      <SectionContent>
        <Row>
          <Col>
            <Styled.CustomTitle>
              Seja descoberto por um coach e receba uma proposta para competir em alto nível!
            </Styled.CustomTitle>

            <SectionText>
              Somos uma agência de intercâmbio esportivo. Assessoramos jovens players em busca da
              melhor oportunidade de estudo (graduação e mestrado) aliado a jogar competitivamente,
              ajudando em todo o processo rumo ao Estados Unidos.
            </SectionText>
          </Col>
          <Col></Col>
        </Row>
      </SectionContent>
    </Styled.CustomSection>
  );
}
