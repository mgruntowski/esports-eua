import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuItems = styled.ul`
  flex: 0 0 1100px;
  padding-inline-start: 0;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  list-style: none;
`;

export const Item = styled.li`
  position: relative;

  color: ${({ theme }) => theme.colors.white};

  font-family: "Roboto Condensed", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;

  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};

    &::after {
      width: 50%;
    }
  }

  &::after {
    content: "";

    position: absolute;
    left: 0;
    bottom: -1rem;

    width: 0;
    height: 2px;

    background-color: ${({ theme }) => theme.colors.blue};

    transition: width 0.25s;
  }
`;
