import styled from "styled-components";

type ContainerProps = {
  withBackground: boolean;
};

export const Container = styled.header<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  backdrop-filter: ${({ withBackground }) => (withBackground ? "blur(30px)" : "none")};

  transition: backdrop-filter 0.25s;
`;

export const MenuItems = styled.ul`
  flex: 0 0 1100px;
  padding-inline-start: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  list-style: none;
`;

export const Item = styled.li`
  position: relative;

  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.white};

  font-family: "Roboto Condensed", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;

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
    bottom: 3rem;

    width: 0;
    height: 2px;

    background-color: ${({ theme }) => theme.colors.blue};

    transition: width 0.25s;
  }
`;
