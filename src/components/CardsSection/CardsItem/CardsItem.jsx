import { useEffect, useState } from "react";
import axios from "axios";
import countries from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";
import { IoIosThunderstorm } from "react-icons/io";
import { BsCloudDrizzleFill } from "react-icons/bs";
import { IoIosRainy } from "react-icons/io";
import { IoIosSnow } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";
import { MdFoggy } from "react-icons/md";
import { LuTornado } from "react-icons/lu";
import { IoIosCloudy } from "react-icons/io";
import { FaQuestion } from "react-icons/fa6";
import { BsFillCloudHaze2Fill } from "react-icons/bs";

import {
  Body,
  Details,
  Header,
  Item,
  Location,
  Span,
  Temp,
  Time,
  Wrap,
  Wrapper,
} from "./CardsItemStyled";

countries.registerLocale(en);

const cityApi = axios.create({
  baseURL: "https://api.openweathermap.org",
});

export const CardsItem = ({ lat, lon }) => {
  const [city, setCity] = useState({});

  const getCity = async () => {
    try {
      const request = await cityApi.get(
        `/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=40a99afd57061fd29c9c66b58c5034d3`
      );
      setCity(request.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCity();
  }, []);

  return (
    <Item data-lat={lat} data-lon={lon}>
      <Header>
        <Location>{city.name}</Location>
        {city.sys ? (
          <Location>{countries.getName(city.sys.country, "en")}</Location>
        ) : (
          <></>
        )}
      </Header>
      <Time>
        {(
          new Date(Date.now() + city.timezone * 1000).getUTCHours() + ""
        ).padStart(2, "0")}
        :
        {(
          new Date(Date.now() + city.timezone * 1000).getUTCMinutes() + ""
        ).padStart(2, "0")}
      </Time>
      <Body>
        <Wrap>
          <p>
            {new Date().getDate()}.{new Date().getMonth() + 1}.
            {new Date().getFullYear()}
          </p>
        </Wrap>
        <Wrap>
          <p> {new Date().toLocaleString("en-US", { weekday: "long" })}</p>
        </Wrap>
      </Body>
      {city.weather ? (
        city.weather[0].main === "Thunderstorm" ? (
          <IoIosThunderstorm
            fill="#282446ff"
            style={{ margin: "0 auto", display: "block" }}
            size="54"
          />
        ) : city.weather[0].main === "Drizzle" ? (
          <BsCloudDrizzleFill
            fill="#8387afff"
            style={{ margin: "0 auto", display: "block" }}
            size="54"
          />
        ) : city.weather[0].main === "Rain" ? (
          <IoIosRainy
            fill="#5461a9ff"
            style={{ margin: "0 auto", display: "block" }}
            size="54"
          />
        ) : city.weather[0].main === "Snow" ? (
          <IoIosSnow
            fill="#cececeff"
            style={{ margin: "0 auto", display: "block" }}
            size="54"
          />
        ) : city.weather[0].main === "Clouds" ? (
          <IoIosCloudy
            fill="#bcbcbcff"
            style={{ margin: "0 auto", display: "block" }}
            size="54"
          />
        ) : city.weather[0].main === "Mist" ||
          city.weather[0].main === "Fog" ? (
          <MdFoggy
            fill="#a4a4a4ff"
            style={{ margin: "0 auto", display: "block" }}
            size="54"
          />
        ) : city.weather[0].main === "Clear" ? (
          <IoIosSunny
            fill="#ffcc00ff"
            style={{ margin: "0 auto", display: "block" }}
            size="54"
          />
        ) : city.weather[0].main === "Extreme" ? (
          <LuTornado style={{ margin: "0 auto", display: "block" }} size="54" />
        ) : city.weather[0].main === "Haze" ? (
          <BsFillCloudHaze2Fill
            fill="#888073ff"
            style={{ margin: "0 auto", display: "block" }}
            size="54"
          />
        ) : (
          <FaQuestion
            fill="#2C2C2C"
            style={{ margin: "0 auto", display: "block" }}
            size="54"
          />
        )
      ) : (
        <FaQuestion
          fill="#2C2C2C"
          style={{ margin: "0 auto", display: "block" }}
          size="54"
        />
      )}
      <Temp>
        {city.main ? <Span>{Math.round(city.main.temp)}</Span> : <></>}°C
      </Temp>
      <Wrapper>
        <Details data-action="hour">Hourly</Details>
        <Details data-action="week">Weekly</Details>
      </Wrapper>
      <Details data-action="details">See more</Details>
    </Item>
  );
};
