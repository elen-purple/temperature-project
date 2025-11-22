import { PetSection } from "./components/PetsSection/PetsSection";
import { GlobalStyle } from "./components/common/GlobalStyle/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./services/theme";
import { NatureSection } from "./components/NatureSection/NatureSection";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { FooterSection } from "./components/FooterSection/FooterSection";
import { CardsSection } from "./components/CardsSection/CardsSection";
import { DetailsSection } from "./components/DetailsSection/DetailsSection";
import { HourSection } from "./components/HourSection/HourSection";
import { useState } from "react";

const App = () => {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [details, setDetails] = useState(false);
  const [hour, setHour] = useState(false);
  const [week, setWeek] = useState(false);

  const changeSection = (e) => {
    if (e.target.dataset.action === "details") {
      setDetails(true);
      setHour(false);
    } else if (e.target.dataset.action === "hour") {
      setDetails(false);
      setHour(true);
    }
  };

  const changeLatLon = (e) => {
    if (
      e.target.dataset.action === "details" ||
      e.target.dataset.action === "hour"
    ) {
      setLat(Number.parseFloat(e.target.closest("li").dataset.lat));
      setLon(Number.parseFloat(e.target.closest("li").dataset.lon));
    }
    changeSection(e);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeroSection />
      <CardsSection changeLatLon={changeLatLon} />
      {details ? <DetailsSection lat={lat} lon={lon} /> : <></>}
      {hour ? <HourSection lat={lat} lon={lon} /> : <></>}
      <PetSection />
      <NatureSection />
      <FooterSection />
    </ThemeProvider>
  );
};

export default App;
