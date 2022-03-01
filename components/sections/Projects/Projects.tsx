import { Col, Row, Section, SectionContent } from "components/skeleton";
import { SectionText, SectionTitle } from "components/typography";

export default function Projects(): JSX.Element {
  return (
    <Section id="projetos">
      <SectionContent>
        <Row>
          <Col>
            <SectionTitle>Projetos</SectionTitle>

            <SectionText>
              Intercâmbio Treinadores de Futebol <br />
              Intercâmbio Jovens as Clínicas do Real Madrid
            </SectionText>
          </Col>
          <Col></Col>
        </Row>
      </SectionContent>
    </Section>
  );
}
