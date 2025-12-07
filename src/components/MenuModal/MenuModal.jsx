import { useEffect, useState } from "react";
import { setItem } from "../../services/localStorage";
import axios from "axios";
import {
  Button,
  Greeting,
  Link,
  List,
  Menu,
  Right,
  Span,
} from "./MenuModalStyled";
import { Container } from "../common/Container/Container";

const usersApi = axios.create({
  baseURL: "https://692abbee7615a15ff24d828a.mockapi.io/temperature-project",
});

export const MenuModal = ({ userId, setUserId, openSign, openLog, menu }) => {
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
    <>
      {menu ? (
        <Menu>
          <Container>
            <List>
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">News</Link>
              </li>
              <li>
                <Link href="#">Nature</Link>
              </li>
            </List>
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
          </Container>
        </Menu>
      ) : (
        <></>
      )}
    </>
  );
};
