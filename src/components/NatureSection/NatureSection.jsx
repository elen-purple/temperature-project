import { Container } from "../common/Container/Container";
import { Section, Title } from "./NatureSectionStyled";
import { NatureSlider } from "./NatureSlider/NatureSlider";

export const NatureSection = () => {
  return (
    <Section id="nature">
      <Container>
        <Title>Beautiful nature</Title>
        <NatureSlider />
      </Container>
    </Section>
  );
};
