import { useMemo } from "react";
import * as Styled from "./styles";

export default function Menu(): JSX.Element {
  const menuItems = useMemo(
    () => [
      { text: "Quem somos" },
      { text: "Serviços" },
      { text: "Projetos" },
      { text: "Parceiros" },
      { text: "Contato" }
    ],
    []
  );

  return (
    <Styled.Container>
      <Styled.MenuItems>
        {menuItems.map((item, index) => (
          <Styled.Item key={index}>{item.text}</Styled.Item>
        ))}
      </Styled.MenuItems>
    </Styled.Container>
  );
}
