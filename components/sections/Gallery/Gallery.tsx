import { mdiPlay } from "@mdi/js";
import Icon from "@mdi/react";
import { Section, SectionContent } from "components/skeleton";
import Image from "next/image";
import { useState } from "react";

import * as Styled from "./styles";

export default function Gallery(): JSX.Element {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  return (
    <Section>
      <SectionContent>
        <Styled.VideoHeader>
          <h1>Onde você irá estudar e competir</h1>
        </Styled.VideoHeader>

        <Styled.VideoContainer
          isVideoVisible={isVideoVisible}
          onClick={() => setIsVideoVisible(true)}
        >
          <Styled.VideoImage>
            <Image src="http://img.youtube.com/vi/-yuNHEedz5A/maxresdefault.jpg" layout="fill" />
          </Styled.VideoImage>

          <Styled.VideoButton>
            <Icon path={mdiPlay} size="80px" />
          </Styled.VideoButton>

          <iframe
            width="100%"
            height="618"
            src={`https://www.youtube.com/embed/-yuNHEedz5A?&amp;autoplay=${
              isVideoVisible ? "1" : "0"
            }&amp;iv_load_policy=3&amp;modestbranding=1&amp;rel=0&amp;showinfo=0`}
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
            title="Embedded youtube"
          />
        </Styled.VideoContainer>

        <Styled.VideoFooter>
          <span>Dê um play</span>
        </Styled.VideoFooter>
      </SectionContent>
    </Section>
  );
}
