import { useState } from "react";
import { Container } from "../common/Container/Container";
import { CardsForm } from "./CardsForm/CardsForm";
import { CardsList } from "./CardsList/CardsList";
import { Section } from "./CardsSectionStyled";

export const CardsSection = ({ changeLatLon, resetSection, userId }) => {
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");
  const [incorrect, setIncorrect] = useState(false);

  const changeSearch = (e) => {
    e.preventDefault();
    if (e.currentTarget.elements.search.value === "") {
      setIncorrect(true);
      return;
    }
    setIncorrect(false);
    resetSection();
    setSearch(e.currentTarget.elements.search.value);
  };

  const resetSearch = (e) => {
    e.preventDefault();
    setIncorrect(false);
    resetSection();
    setSearch("");
    setValue("");
  };

  return (
    <Section>
      <Container>
        <h2 hidden>Cards</h2>
        <CardsForm
          incorrect={incorrect}
          search={search}
          value={value}
          resetSection
          setValue={setValue}
          resetSearch={resetSearch}
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
