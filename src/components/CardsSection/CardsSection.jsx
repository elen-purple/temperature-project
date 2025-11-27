import { useState } from "react";
import { Container } from "../common/Container/Container";
import { CardsForm } from "./CardsForm/CardsForm";
import { CardsList } from "./CardsList/CardsList";
import { Section } from "./CardsSectionStyled";

export const CardsSection = ({ changeLatLon, resetSection }) => {
  const [search, setSearch] = useState("");

  const changeSearch = (e) => {
    e.preventDefault();
    resetSection();
    setSearch(e.currentTarget.elements.search.value);
  };

  return (
    <Section>
      <Container>
        <h2 hidden>Cards</h2>
        <CardsForm changeSearch={changeSearch} />
        <CardsList changeLatLon={changeLatLon} search={search} />
      </Container>
    </Section>
  );
};
