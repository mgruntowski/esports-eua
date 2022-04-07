import { useInView } from "react-intersection-observer";

import { Row, Section, SectionContent } from "components/skeleton";
import { SectionTitle } from "components/typography";

import * as Styled from "./styles";
import { useEffect, useState } from "react";
import theme from "styles/theme";

export default function HowItWorks(): JSX.Element {
  const { ref, inView } = useInView();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (inView && !shouldAnimate) setShouldAnimate(true);
  }, [inView]);

  return (
    <Section id="como-funciona">
      <SectionContent data-floating-title="HOW IT WORKS?" floatingTitleColor={theme.colors.gray}>
        <Row justifyContent="center">
          <SectionTitle>Como funciona?</SectionTitle>
        </Row>

        <Row ref={ref}>
          <Styled.BrazilMap />
          <Styled.BrazilMap $shouldAnimate $animate={shouldAnimate} />

          <Styled.StepsContainer $animate={shouldAnimate}>
            <Styled.Step>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ante in nibh mauris cursus mattis
              molestie.
            </Styled.Step>

            <Styled.Step>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ante in nibh mauris cursus mattis
              molestie.
            </Styled.Step>

            <Styled.Step>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ante in nibh mauris cursus mattis
              molestie.
            </Styled.Step>

            <Styled.Step>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ante in nibh mauris cursus mattis
              molestie.
            </Styled.Step>
          </Styled.StepsContainer>

          <Styled.UsaMap />
          <Styled.UsaMap $shouldAnimate $animate={shouldAnimate} />
        </Row>
      </SectionContent>
    </Section>
  );
}
