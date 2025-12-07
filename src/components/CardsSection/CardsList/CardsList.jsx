import { useEffect, useState } from "react";
import axios from "axios";
import { Loading } from "../../common/Loading/Loading";
import { Message } from "../../common/Message/Message";
import { CardsItem } from "../CardsItem/CardsItem";
import { List } from "./CardsListStyled";

const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org",
});
const usersApi = axios.create({
  baseURL: "https://692abbee7615a15ff24d828a.mockapi.io/temperature-project",
});

export const CardsList = ({
  search,
  setSearch,
  changeLatLon,
  setValue,
  resetSection,
  userId,
}) => {
  const [cities, setCities] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [reload, setReload] = useState(false);

  const getCities = async () => {
    const isLogined = userId ? true : false;
    setIsLoading(true);
    try {
      if (isLogined && !search) {
        const request = await usersApi.get(`/users?index=${userId}`);
        if (request.data[0].favorite.length === 0) {
          setCities(null);
          return;
        }
        setCities(request.data[0].favorite);
      } else if (search) {
        const request = await weatherApi.get(
          `/geo/1.0/direct?q=${search
            .split(" ")
            .join("+")}&limit=5&appid=40a99afd57061fd29c9c66b58c5034d3`
        );
        setCities(request.data);
      } else {
        setCities(null);
      }
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCities();
  }, [reload, search, userId]);

  const addFavorite = async (e) => {
    if (e.target.closest("li")) {
      resetSection();
      const lon = e.target.closest("li").dataset.lon;
      const lat = e.target.closest("li").dataset.lat;

      const request = await usersApi.get(`/users?index=${userId}`);
      const favorite = request.data[0].favorite;
      const id = request.data[0].id;
      const index = request.data[0].index;
      const username = request.data[0].username;
      const email = request.data[0].email;
      const password = request.data[0].password;
      if (favorite.some((fav) => fav.lat === lat && fav.lon === lon)) return;
      await usersApi.put(`/users/${id}`, {
        id,
        index,
        username,
        email,
        password,
        favorite: [...favorite, { lat: lat, lon: lon }],
      });

      const request2 = await usersApi.get(`/users?index=${userId}`);
      setCities(request2.data[0].favorite);
      setValue("");
      setSearch("");
      setReload((prev) => !prev);
    }
  };

  const removeFavorite = async (e) => {
    if (e.target.closest("li")) {
      resetSection();
      const lon = e.target.closest("li").dataset.lon;
      const lat = e.target.closest("li").dataset.lat;

      const request = await usersApi.get(`/users?index=${userId}`);
      const favorite = request.data[0].favorite;
      const id = request.data[0].id;
      const index = request.data[0].index;
      const username = request.data[0].username;
      const email = request.data[0].email;
      const password = request.data[0].password;
      if (!favorite.find((fav) => fav.lat === lat && fav.lon === lon)) return;
      favorite.splice(
        favorite.indexOf(
          favorite.find((item) => item.lat === lat && item.lon === lon)
        ),
        1
      );

      await usersApi.put(`/users/${id}`, {
        id,
        index,
        username,
        email,
        password,
        favorite,
      });

      setCities(favorite.length ? favorite : null);
      setValue("");
      setSearch("");
      setReload((prev) => !prev);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Message text={"You have an error: " + error} />
      ) : !cities ? (
        <Message text={"There aren't any cities"} />
      ) : (
        <List onClick={changeLatLon}>
          {cities.map(({ lat, lon }, index) => (
            <CardsItem
              removeFavorite={removeFavorite}
              addFavorite={addFavorite}
              key={index}
              lat={lat}
              lon={lon}
            />
          ))}
        </List>
      )}
    </>
  );
};
