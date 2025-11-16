import logo from "../../icons/footer-logo.svg";
import { FiInstagram } from "react-icons/fi";
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa6";
import { Link, List, Logo, Section, Title, Wrap } from "./FooterSectionStyled";
import { Container } from "../common/Container/Container";

export const FooterSection = () => {
  return (
    <Section>
      <Container>
        <Logo width="182.55" height="36">
          <use href={logo}></use>
        </Logo>
        <Wrap>
          <Title>Address</Title>
          <Link
            target="_blanc"
            href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A1%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%B8,+35,+%D0%9A%D0%BD%D1%8F%D0%B6%D0%B8%D1%87%D1%96,+%D0%9A%D0%B8%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+07455/@50.453059,30.7676828,226m/data=!3m1!1e3!4m15!1m8!3m7!1s0x40d4db7b639e50b7:0x6b0422c212c96430!2z0LLRg9C70LjRhtGPINCh0LLQvtCx0L7QtNC4LCAzNSwg0JrQvdGP0LbQuNGH0ZYsINCa0LjRl9Cy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDA3NDU1!3b1!8m2!3d50.4526916!4d30.7679167!16s%2Fg%2F11fk3c8ww_!3m5!1s0x40d4db7b639e50b7:0x6b0422c212c96430!8m2!3d50.4526916!4d30.7679167!16s%2Fg%2F11fk3c8ww_?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
          >
            Svobody str. 35 Kyiv Ukraine
          </Link>
        </Wrap>
        <Wrap>
          <Title>Contact us</Title>
          <List>
            <li>
              <a href="">
                <FiInstagram size="32" stroke="#ffffff" />
              </a>
            </li>
            <li>
              <a href="">
                <MdFacebook size="32" fill="#ffffff" />
              </a>
            </li>
            <li>
              <a href="">
                <FaTwitter size="32" fill="#ffffff" />
              </a>
            </li>
          </List>
        </Wrap>
      </Container>
    </Section>
  );
};
