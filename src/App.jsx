import { PetSection } from "./components/PetsSection/PetsSection";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./services/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PetSection />
    </ThemeProvider>
  );
};

export default App;
