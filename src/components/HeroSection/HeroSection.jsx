import { Container } from "../common/Container/Container";
import { HeroDate } from "./HeroDate/HeroDate";
import { Desc, Section, Title, Wrap, Wraper } from "./HeroSectionStyled";

export const HeroSection = ({}) => {
  return (
    <Section>
      <Container>
        <Title>Weather dashboard</Title>
        <Wrap>
          <Wraper>
            <Desc>
              Create your personal list of favorite cities and always be aware
              of the weather.
            </Desc>
          </Wraper>
          <HeroDate />
        </Wrap>
      </Container>
    </Section>
  );
};
