import { useState } from "react";
import { Container } from "../common/Container/Container";
import { CardsForm } from "./CardsForm/CardsForm";
import { CardsList } from "./CardsList/CardsList";
import { Section } from "./CardsSectionStyled";

export const CardsSection = ({ changeLatLon, resetSection, userId }) => {
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");

  const changeSearch = (e) => {
    e.preventDefault();
    resetSection();
    setSearch(e.currentTarget.elements.search.value);
  };

  return (
    <Section>
      <Container>
        <h2 hidden>Cards</h2>
        <CardsForm
          search={search}
          value={value}
          resetSection
          setValue={setValue}
          changeSearch={changeSearch}
        />
        <CardsList
          resetSection={resetSection}
          userId={userId}
          setSearch={setSearch}
          changeLatLon={changeLatLon}
          search={search}
          setValue={setValue}
        />
      </Container>
    </Section>
  );
};
