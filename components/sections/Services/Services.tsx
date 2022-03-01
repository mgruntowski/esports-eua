import { Col, Row, Section, SectionContent } from "components/skeleton";
import { SectionText, SectionTitle } from "components/typography";

export default function Services(): JSX.Element {
  return (
    <Section>
      <SectionContent>
        <Row>
          <Col>
            <SectionTitle>Serviços</SectionTitle>

            <SectionText>
              Intercâmbio Esportivo (competir + estudar com bolsa nos EUA) <br />
              Intercâmbio Esporte eletrônico (competir + estudar com bolsa EUA)
            </SectionText>
          </Col>
          <Col></Col>
        </Row>
      </SectionContent>
    </Section>
  );
}
