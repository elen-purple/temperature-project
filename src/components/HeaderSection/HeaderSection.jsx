import { Container } from "../common/Container/Container";

export const HeaderSection = ({ openSign, openLog }) => {
  return (
    <header>
      <Container>
        <button onClick={openSign} type="button">
          Sign up
        </button>
        <button onClick={openLog} type="button">
          Log in
        </button>
      </Container>
    </header>
  );
};
