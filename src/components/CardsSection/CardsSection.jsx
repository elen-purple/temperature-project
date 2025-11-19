import { useState } from "react";
import { Container } from "../common/Container/Container";
import { CardsForm } from "./CardsForm/CardsForm";
import { CardsList } from "./CardsList/CardsList";
import { Section } from "./CardsSectionStyled";

export const CardsSection = () => {
  const [search, setSearch] = useState("");

  const changeSearch = (e) => {
    e.preventDefault();
    setSearch(e.currentTarget.elements.search.value);
  };

  return (
    <Section>
      <Container>
        <CardsForm changeSearch={changeSearch} />
        <CardsList search={search} />
      </Container>
    </Section>
  );
};
