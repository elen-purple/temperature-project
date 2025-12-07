import axios from "axios";
import { useEffect, useState } from "react";
import { PetsList } from "./PetsList/PetsList";
import { Message } from "../common/Message/Message";
import { Loading } from "../common/Loading/Loading";
import { PetsButton } from "./PetsButton/PetsButton";
import { Container } from "../common/Container/Container";
import { Section, Title } from "./PetsSectionStyled";

const petsApi = axios.create({
  baseURL: "https://content.guardianapis.com",
});

export const PetSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [page, setPage] = useState(1);

  const getArticles = async () => {
    setIsLoading(true);
    try {
      const request = await petsApi.get(
        `/search?page=${page}&page-size=4&q=pets&api-key=b0e27067-6866-4cc3-9d2c-8fc536345c97`
      );
      const array = [...articles, ...request.data.response.results];
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
  }, [page]);

  return (
    <Section id="news">
      <Container>
        <Title>Interacting with our pets</Title>
        {isLoading ? (
          <Loading />
        ) : error ? (
          <Message text={"You have an error: " + error} />
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
