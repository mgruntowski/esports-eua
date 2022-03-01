import { Col, Row, Section, SectionContent } from "components/skeleton";
import { SectionTitle } from "components/typography";

export default function Partners(): JSX.Element {
  return (
    <Section>
      <SectionContent>
        <Row>
          <Col>
            <SectionTitle>Parceiros</SectionTitle>
          </Col>
          <Col></Col>
        </Row>
      </SectionContent>
    </Section>
  );
}
