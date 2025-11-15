import { PetSection } from "./components/PetsSection/PetsSection";
import { GlobalStyle } from "./components/common/GlobalStyle/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./services/theme";
import { NatureSection } from "./components/NatureSection/NatureSection";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PetSection />
      <NatureSection />
    </ThemeProvider>
  );
};

export default App;
