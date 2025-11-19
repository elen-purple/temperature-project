import { PetSection } from "./components/PetsSection/PetsSection";
import { GlobalStyle } from "./components/common/GlobalStyle/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./services/theme";
import { NatureSection } from "./components/NatureSection/NatureSection";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { FooterSection } from "./components/FooterSection/FooterSection";
import { CardsSection } from "./components/CardsSection/CardsSection";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeroSection />
      <CardsSection />
      <PetSection />
      <NatureSection />
      <FooterSection />
    </ThemeProvider>
  );
};

export default App;
