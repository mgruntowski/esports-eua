import { Col, Row, Section, SectionContent } from "components/skeleton";
import { HighlightText, SectionText, SectionTitle, SectionTitle2 } from "components/typography";

export default function AboutUs(): JSX.Element {
  return (
    <Section>
      <SectionContent>
        <Row>
          <Col>
            <SectionTitle>Quem somos</SectionTitle>

            <SectionText>
              Agência de intercâmbio esportivo. <br />
              Assessoramos os clientes em busca da melhor oportunidade de estudo aliado a jogar
              competitivamente, ajudando em todo o processo rumo ao Estados Unidos.
            </SectionText>

            <SectionTitle2>Equipe</SectionTitle2>

            <SectionText>
              <HighlightText>Felipe Milanez Brugnari</HighlightText> e{" "}
              <HighlightText>João Franciso Delgado</HighlightText>
            </SectionText>
          </Col>
          <Col></Col>
        </Row>
      </SectionContent>
    </Section>
  );
}
