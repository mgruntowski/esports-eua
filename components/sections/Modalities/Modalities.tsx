import { AutoCarousel } from "components/carousels";
import { Row, Section, SectionContent } from "components/skeleton";

import modalities from "./modalities.json";

export default function Modalities(): JSX.Element {
  return (
    <Section padding="3.0rem 0">
      <SectionContent fullWidth>
        <Row>
          <AutoCarousel data={modalities} />
        </Row>
      </SectionContent>
    </Section>
  );
}
