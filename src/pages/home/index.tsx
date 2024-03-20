// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
} from "./style";

export const Home = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
              Bringing together art and technology to craft memorable web
              experiences{" "}
            </Text>
            <Text type="body1" color="grey6">
              Full Stack developer graduated from Kenzie Academy Brazil, I have
              completed several individual and group projects, consistently
              turning ideas into solutions.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" href="#projetos">
                Projects
              </Button>
              <Button as="a" href="#tecnologias" type="btLink" color="grey5">
                Technologies
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection id="tecnologias">
        <Container>
          <Text as="h4" type="heading3" color="grey1">
            Languages and Tools
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey1">
                Do you want to know more about me?
              </Text>
              <Text as="p" type="body1" color="grey2">
                On LinkedIn, I share more about myself and my daily processes.
                I'm open to exchanging some ideas over there!
              </Text>
              <Button
                type="primary"
                target="_blank"
                as="a"
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              >
                Access profile on LinkedIn
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text type="body1" color="grey2" css={{ marginBottom: "$2" }}>
                Projects
              </Text>
              <Text as="h3" type="heading2" color="grey1">
                Creating projects with{" "}
                <Text as="span" color="brand5" type="heading2">
                  dedication
                </Text>{" "}
                and{" "}
                <Text as="span" color="brand1" type="heading2">
                  originality
                </Text>{" "}
              </Text>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
