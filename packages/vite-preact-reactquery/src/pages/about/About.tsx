import { DocumentHead, PageContainer, SocialGrid } from "@components";
import { aboutContentES, aboutContentEN } from "./content";
import { useSanitizeLanguage } from "@utils";
import Markdown from "preact-markdown";

import type { VNode } from "preact";

import { styles } from "./styles";

const About = (): VNode => {
  const { language } = useSanitizeLanguage();

  return (
    <PageContainer>
      <DocumentHead>
        <title>👨‍💻 About me</title>
      </DocumentHead>
      <div style={styles.markdownContent}>
        {Markdown(language() === "es" ? aboutContentES : aboutContentEN, {
          markupOpts: {},
          markedOpts: {},
        })}
      </div>
      <SocialGrid />
    </PageContainer>
  );
};

export default About;
