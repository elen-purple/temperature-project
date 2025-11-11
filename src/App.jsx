import { PetSection } from "./components/PetsSection/PetsSection";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./services/theme";
import { NatureSection } from "./components/NatureSection/NatureSection";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NatureSection />
      <PetSection />
    </ThemeProvider>
  );
};

export default App;
