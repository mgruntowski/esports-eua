import { Col, Row, Section, SectionContent } from "components/skeleton";
import { SectionTitle } from "components/typography";

export default function HowItWorks(): JSX.Element {
  return (
    <Section id="como-funciona">
      <SectionContent>
        <Row>
          <Col>
            <SectionTitle>Como funciona?</SectionTitle>
          </Col>
          <Col></Col>
        </Row>
      </SectionContent>
    </Section>
  );
}
