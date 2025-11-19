import { useEffect, useState } from "react";
import axios from "axios";
import { Loading } from "../../common/Loading/Loading";
import { Message } from "../../common/Message/Message";
import { CardsItem } from "../CardsItem/CardsItem";
import { List } from "./CardsListStyled";

const weatherApi = axios.create({
  baseURL: "http://api.openweathermap.org",
});

export const CardsList = ({ search }) => {
  const [cities, setCities] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const getCities = async () => {
    setIsLoading(true);
    try {
      if (search === "") {
        return;
      }
      const request = await weatherApi.get(
        `/geo/1.0/direct?q=${search
          .split(" ")
          .join("+")}&limit=5&appid=40a99afd57061fd29c9c66b58c5034d3`
      );
      setCities(request.data);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCities();
  }, [search]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Message text={"You have an error: " + error} />
      ) : !cities ? (
        <Message text={"There aren't any cities"} />
      ) : (
        <List>
          {cities.map(({ lat, lon }, index) => (
            <CardsItem key={index} lat={lat} lon={lon} />
          ))}
        </List>
      )}
    </>
  );
};
