import { Col, Row, Section, SectionContent } from "components/skeleton";
import { HighlightText, SectionText, SectionTitle } from "components/typography";

export default function AboutUs(): JSX.Element {
  return (
    <Section id="quem-somos">
      <SectionContent>
        <Row>
          <Col>
            <SectionTitle>Quem somos</SectionTitle>

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
          <Col></Col>
        </Row>
      </SectionContent>
    </Section>
  );
}
