import { Container } from "../common/Container/Container";
import axios from "axios";
import { useState, useEffect } from "react";
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { LuWind } from "react-icons/lu";
import { FaEye } from "react-icons/fa";

import {
  Item,
  List,
  Section,
  Subtitle,
  Title,
  Wrap,
} from "./DetailsSectionStyled";

const weatherApi = axios.create({
  baseURL: "http://api.openweathermap.org",
});

export const DetailsSection = ({ lat, lon }) => {
  const [weather, setWeather] = useState({});

  const getWeather = async () => {
    if (!lat || !lon) {
      return;
    }
    try {
      const request = await weatherApi.get(
        `/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=40a99afd57061fd29c9c66b58c5034d3`
      );
      setWeather(request.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getWeather();
  }, [lat, lon]);

  return (
    <Section>
      <Container>
        <h2 hidden>Details</h2>
        <List>
          <Item>
            <Wrap>
              <Subtitle>Feels like</Subtitle>
              <Title>
                {weather.main
                  ? Math.round(weather.main.feels_like * 10) / 10
                  : ""}
                °C
              </Title>
            </Wrap>
            <CiTempHigh size="40" fill="#16AB3B" />
          </Item>
          <Item>
            <Wrap>
              <Subtitle>Min °C</Subtitle>
              <Title>
                {weather.main
                  ? Math.round(weather.main.temp_min * 10) / 10
                  : ""}
                °C
              </Title>
            </Wrap>
            <Wrap>
              <Subtitle>Max °C</Subtitle>
              <Title>
                {weather.main
                  ? Math.round(weather.main.temp_max * 10) / 10
                  : ""}
                °C
              </Title>
            </Wrap>
          </Item>
          <Item>
            <Wrap>
              <Subtitle>Humidity</Subtitle>
              <Title>{weather.main ? weather.main.humidity : ""} %</Title>
            </Wrap>
            <WiHumidity size="40" fill="#16AB3B" />
          </Item>
          <Item>
            <Wrap>
              <Subtitle>Pressure</Subtitle>
              <Title>{weather.main ? weather.main.pressure : ""} Pa</Title>
            </Wrap>
            <MdOutlineKeyboardDoubleArrowDown size="40" fill="#16AB3B" />
          </Item>
          <Item>
            <Wrap>
              <Subtitle>Wind speed</Subtitle>
              <Title>{weather.wind ? weather.wind.speed : ""} m/s</Title>
            </Wrap>
            <LuWind size="40" stroke="#16AB3B" />
          </Item>
          <Item>
            <Wrap>
              <Subtitle>Visibility</Subtitle>
              <Title>{weather.visibility}</Title>
            </Wrap>
            <FaEye size="40" fill="#16AB3B" />
          </Item>
        </List>
      </Container>
    </Section>
  );
};
