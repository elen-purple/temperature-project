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
import { WeekSection } from "./components/WeekSection/WeekSection";
import { useModal } from "./hooks/useModal";
import { SignupModal } from "./components/SignupModal/SignupModal";
import { HeaderSection } from "./components/HeaderSection/HeaderSection";
import { LoginModal } from "./components/LoginModal/LoginModal";
import { getItem } from "./services/localStorage";
import { MenuModal } from "./components/MenuModal/MenuModal";

const App = () => {
  const [sign, openSign, closeSign] = useModal(false);
  const [log, openLog, closeLog] = useModal(false);
  const [menu, openMenu, closeMenu] = useModal(false);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [details, setDetails] = useState(false);
  const [hour, setHour] = useState(false);
  const [week, setWeek] = useState(false);
  const [userId, setUserId] = useState(getItem());

  const changeSection = (e) => {
    if (e.target.dataset.action === "details") {
      setDetails(true);
      setWeek(false);
      setHour(false);
    } else if (e.target.dataset.action === "hour") {
      setDetails(false);
      setWeek(false);
      setHour(true);
    } else if (e.target.dataset.action === "week") {
      setDetails(false);
      setHour(false);
      setWeek(true);
    }
  };

  const resetSection = () => {
    setDetails(false);
    setWeek(false);
    setHour(false);
  };

  const changeLatLon = (e) => {
    if (
      e.target.dataset.action === "details" ||
      e.target.dataset.action === "hour" ||
      e.target.dataset.action === "week"
    ) {
      setLat(Number.parseFloat(e.target.closest("li").dataset.lat));
      setLon(Number.parseFloat(e.target.closest("li").dataset.lon));
    }
    changeSection(e);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeaderSection
        menu={menu}
        openMenu={openMenu}
        closeMenu={closeMenu}
        userId={userId}
        setUserId={setUserId}
        openSign={openSign}
        openLog={openLog}
      />
      <HeroSection />
      <CardsSection
        userId={userId}
        resetSection={resetSection}
        changeLatLon={changeLatLon}
      />
      {details ? <DetailsSection lat={lat} lon={lon} /> : <></>}
      {hour ? <HourSection lat={lat} lon={lon} /> : <></>}
      {week ? <WeekSection lat={lat} lon={lon} /> : <></>}
      <PetSection />
      <NatureSection />
      <FooterSection />
      <SignupModal
        setUserId={setUserId}
        sign={sign}
        closeSign={closeSign}
        openLog={openLog}
      />
      <LoginModal
        setUserId={setUserId}
        log={log}
        closeLog={closeLog}
        openSign={openSign}
      />
      <MenuModal
        menu={menu}
        userId={userId}
        setUserId={setUserId}
        openSign={openSign}
        openLog={openLog}
      />
    </ThemeProvider>
  );
};

export default App;
