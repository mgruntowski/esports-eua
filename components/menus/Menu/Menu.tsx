import { useMemo } from "react";
import Link from "next/link";

import * as Styled from "./styles";

export default function Menu(): JSX.Element {
  const menuItems = useMemo(
    () => [
      { text: "Quem somos", target: "quem-somos" },
      { text: "Serviços", target: "servicos" },
      { text: "Projetos", target: "projetos" },
      { text: "Parceiros", target: "parceiros" },
      { text: "Contato", target: "contato" }
    ],
    []
  );

  return (
    <Styled.Container>
      <Styled.MenuItems>
        {menuItems.map((item, index) => (
          <Link key={index} href={`#${item.target}`}>
            <Styled.Item>{item.text}</Styled.Item>
          </Link>
        ))}
      </Styled.MenuItems>
    </Styled.Container>
  );
}
