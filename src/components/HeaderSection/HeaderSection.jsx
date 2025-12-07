import { useEffect, useState } from "react";
import { Container } from "../common/Container/Container";
import { getItem, setItem } from "../../services/localStorage";
import logo from "../../icons/logo.svg";
import axios from "axios";
import {
  Button,
  Greeting,
  Left,
  Link,
  List,
  Menu,
  MenuBtn,
  Right,
  Section,
  Span,
} from "./HeaderSectionStyled";

const usersApi = axios.create({
  baseURL: "https://692abbee7615a15ff24d828a.mockapi.io/temperature-project",
});

export const HeaderSection = ({
  openSign,
  openLog,
  userId,
  setUserId,
  menu,
  openMenu,
  closeMenu,
}) => {
  const [name, setName] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchUser = async () => {
      try {
        const response = await usersApi.get(`/users?index=${userId}`);
        setName(response.data[0].username);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <Section>
      <Container>
        <Left>
          <svg width="182.55" height="36">
            <use href={logo}></use>
          </svg>
          <List>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#news">News</Link>
            </li>
            <li>
              <Link href="#nature">Nature</Link>
            </li>
          </List>
        </Left>
        {userId ? (
          <Right>
            <Greeting>
              Hello, <Span>{name}</Span>!
            </Greeting>
            <Button
              onClick={() => {
                setUserId(null);
                setItem(null);
                setName(null);
              }}
            >
              Log out
            </Button>
          </Right>
        ) : (
          <Right>
            <Button onClick={openSign} type="button">
              Sign up
            </Button>
            <Button onClick={openLog} type="button">
              Log in
            </Button>
          </Right>
        )}
        <Menu>
          <MenuBtn
            onClick={() => {
              if (menu) {
                closeMenu();
              } else {
                openMenu();
              }
            }}
            $menu={menu}
          >
            Menu
          </MenuBtn>
        </Menu>
      </Container>
    </Section>
  );
};
