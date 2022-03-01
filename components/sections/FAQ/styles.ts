import styled, { css } from "styled-components";

type QuestionsContainerProps = {
  opened?: number;
};

type QuestionContainerProps = {
  opened?: boolean;
};

export const QuestionsContainer = styled.ul<QuestionsContainerProps>`
  padding-inline-start: 0;

  list-style: none;

  ${({ opened = -1 }) =>
    opened !== -1 &&
    css`
      & > li:not(:nth-child(${opened + 1})) {
        p,
        svg {
          opacity: 0.5;
        }
      }
    `}
`;

export const Question = styled.div`
  position: relative;

  width: 100%;
  margin: 1.4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  &::after {
    content: "";

    position: absolute;
    bottom: -40%;
    left: 0;

    width: 0;
    height: 2px;

    background-color: ${({ theme }) => theme.colors.blue};

    transition: width 0.5s;
  }

  & > p {
    transition: opacity 0.25s;
  }

  & > svg {
    transition: 0.25s;

    path {
      transition: fill 0.5s;
    }
  }

  &:hover {
    &::after {
      width: 50%;
    }

    & > svg {
      path {
        fill: ${({ theme }) => theme.colors.blue} !important;
      }
    }

    & > p,
    svg {
      opacity: 1 !important;
    }
  }
`;

export const Answer = styled.p`
  width: 100%;
  max-height: 0;
  padding: 0;
  box-sizing: border-box;

  color: ${({ theme }) => theme.colors.white};

  font-size: 1.6rem;

  transition: 0.25s;
  overflow: hidden;
`;

export const QuestionContainer = styled.li<QuestionContainerProps>`
  flex: 0 0 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${Question} {
    ${({ opened }) =>
      opened &&
      css`
        & > svg {
          transform: rotate(135deg);

          path {
            fill: ${({ theme }) => theme.colors.blue} !important;
          }
        }

        &::after {
          width: 50%;
        }
      `}
  }

  ${Answer} {
    ${({ opened }) =>
      opened &&
      css`
        max-height: 200px;
        padding: 2rem 0;
      `}
  }
`;
