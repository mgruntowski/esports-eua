import { useState } from "react";
import Icon from "@mdi/react";

import { Row, Section, SectionContent } from "components/skeleton";
import { SectionTitle } from "components/typography";

import questions from "./questions.json";

import { mdiPlus } from "@mdi/js";

import theme from "styles/theme";
import * as Styled from "./styles";

export default function FAQ(): JSX.Element {
  const [openedQuestion, setOpenedQuestion] = useState(-1);

  function handleQuestionClick(index: number): void {
    setOpenedQuestion((prev) => (index === prev ? -1 : index));
  }

  return (
    <Section id="perguntas-frequentes" background={theme.colors.darkGray}>
      <SectionContent data-floating-title="FAQ">
        <Row>
          <SectionTitle>Perguntas Frequentes</SectionTitle>
        </Row>

        <Row>
          <Styled.QuestionsContainer opened={openedQuestion}>
            {questions.map((question, index) => (
              <Styled.QuestionContainer key={index} opened={index === openedQuestion}>
                <Styled.Question onClick={() => handleQuestionClick(index)}>
                  <p>{question.question}</p>

                  <Icon path={mdiPlus} size="3rem" />
                </Styled.Question>

                <Styled.Answer>{question.answer}</Styled.Answer>
              </Styled.QuestionContainer>
            ))}
          </Styled.QuestionsContainer>
        </Row>
      </SectionContent>
    </Section>
  );
}
