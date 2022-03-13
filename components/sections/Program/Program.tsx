import { CardsGrid } from "components/grids";
import { Section, SectionContent } from "components/skeleton";
import { HighlightText } from "components/typography";

import program from "./data";

import * as Styled from "./styles";

export default function Program(): JSX.Element {
  return (
    <Section>
      <SectionContent>
        <Styled.ProgramTitle>
          Só a <HighlightText>Nexus</HighlightText> garante o melhor para você em...
        </Styled.ProgramTitle>

        <CardsGrid data={program} />
      </SectionContent>
    </Section>
  );
}
