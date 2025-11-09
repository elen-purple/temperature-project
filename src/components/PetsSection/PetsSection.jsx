import axios from "axios";
import { useEffect, useState } from "react";
import { PetsList } from "./PetsList/PetsList";
import { PetsMessage } from "./PetsMessage/PetsMessage";
import { PetsLoading } from "./PetsLoading/PetsLoading";
import { PetsButton } from "./PetsButton/PetsButton";
import { Container } from "../Container/Container";
import { Section, Title } from "./PetsSectionStyled";

axios.defaults.baseURL = "https://newsapi.org/v2";

export const PetSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [page, setPage] = useState(1);

  const getArticles = async () => {
    setIsLoading(true);
    try {
      const request = await axios.get(
        `/everything?q=pets&sortBy=popularity&apiKey=64a070b11f7e43fbbb4eba1796c6dc9d&pageSize=4&page=${page}`
      );
      const array = [...articles, ...request.data.articles];
      setArticles(array);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  const changePage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getArticles();
  }, []);

  useEffect(() => {
    getArticles();
  }, [page]);

  return (
    <Section>
      <Container>
        <Title>Interacting with our pets</Title>
        {isLoading ? (
          <PetsLoading />
        ) : error ? (
          <PetsMessage text={"You have an error: " + error} />
        ) : (
          <>
            <PetsList articles={articles} />
            <PetsButton changePage={changePage} type="button" />
          </>
        )}
      </Container>
    </Section>
  );
};
