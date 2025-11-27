import axios from "axios";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  TimeScale,
  Title,
  Tooltip,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { Container } from "../common/Container/Container";
import { Section, Wrap, Subtitle } from "./HourSectionStyled";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  TimeScale,
  Title,
  Tooltip
);

const cityApi = axios.create({
  baseURL: "http://api.openweathermap.org",
});

export const HourSection = ({ lat, lon }) => {
  const [city, setCity] = useState(null);

  const getCity = async () => {
    try {
      const request = await cityApi.get(
        `/data/2.5/forecast?lat=${lat}&cnt=16&lon=${lon}&appid=40a99afd57061fd29c9c66b58c5034d3&units=metric`
      );
      const list = request.data.list;
      const labels = list.map((item) =>
        new Date(item.dt_txt)
          .toLocaleString("en-US", { hour: "numeric", hour12: true })
          .toLowerCase() === "12 am"
          ? new Date(item.dt_txt).toLocaleString("en-US", {
              month: "short",
              day: "numeric",
            })
          : new Date(item.dt_txt)
              .toLocaleString("en-US", { hour: "numeric", hour12: true })
              .toLowerCase()
      );
      const data = list.map((item) => item.main.temp);

      setCity({
        labels,
        datasets: [
          {
            label: "Temperature (°C)",
            data,
            borderColor: "#16AB3B",
            backgroundColor: "#16AB3B",
            borderWidth: 2,
          },
        ],
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCity();
  }, [lat, lon]);

  return (
    <Section>
      <Container>
        <Wrap>
          <Subtitle>Hourly forecast</Subtitle>
          {city ? <Line data={city} /> : <></>}
        </Wrap>
      </Container>
    </Section>
  );
};
