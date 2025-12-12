import { IoMdArrowRoundUp } from "react-icons/io";
import { Container } from "../common/Container/Container";
import { useEffect, useState } from "react";
import { Btn, Section } from "./SrollModalStyled";

export const SrollModal = () => {
  const [hover, setHover] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(
      setInterval(() => {
        setScroll(window.scrollY > 499 ? true : false);
      }, 100)
    );

    return setTime(null);
  }, []);

  const setZero = () => {
    setScroll(false);
    window.scroll(0, 0);
  };

  return (
    <Section>
      <Container>
        <Btn
          onClick={setZero}
          $scroll={scroll}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <IoMdArrowRoundUp size="20" fill={hover ? "#ffffff" : "#2C2C2C"} />
        </Btn>
      </Container>
    </Section>
  );
};
