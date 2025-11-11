import { Container } from "../Container/Container";
import { Section, Title } from "./NatureSectionStyled";
import { NatureSlider } from "./NatureSlider/NatureSlider";

export const NatureSection = () => {
  return (
    <Section>
      <Container>
        <Title>Beautiful nature</Title>
        <NatureSlider />
      </Container>
    </Section>
  );
};
