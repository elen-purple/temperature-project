import axios from "axios";
import { Container } from "../common/Container/Container";
import { useEffect, useState } from "react";
import { WeekList } from "./WeekList/WeekList";
import { Section, Subtitle, Wrap } from "./WeekSectionStyled";

const cityApi = axios.create({
  baseURL: "https://api.openweathermap.org",
});

export const WeekSection = ({ lat, lon }) => {
  const [city, setCity] = useState(null);

  const getCity = async () => {
    try {
      const request = await cityApi.get(
        `/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=40a99afd57061fd29c9c66b58c5034d3&units=metric`
      );

      setCity(
        request.data.list.filter(
          (item, index) => index % 4 === 0 && !(index % 8 === 0)
        )
      );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCity();
  }, [lat, lon]);

  console.log(city);

  return (
    <Section>
      <Container>
        <Wrap>
          <Subtitle>5-day forecast</Subtitle>
          <WeekList city={city} />
        </Wrap>
      </Container>
    </Section>
  );
};
