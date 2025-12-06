import { useEffect, useState } from "react";
import { Container } from "../common/Container/Container";
import { getItem, setItem } from "../../services/localStorage";
import logo from "../../icons/logo.svg";
import axios from "axios";

const usersApi = axios.create({
  baseURL: "https://692abbee7615a15ff24d828a.mockapi.io/temperature-project",
});

export const HeaderSection = ({ openSign, openLog }) => {
  const [name, setName] = useState(null);

  useEffect(() => {
    const userId = getItem();
    if (!userId) return;

    console.log("a");
    const fetchUser = async () => {
      try {
        const response = await usersApi.get(`/users?index=${userId}`);
        setName(response.data[0].username);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [getItem()]);

  return (
    <header>
      <Container>
        <div>
          <svg width="182.55" height="36">
            <use href={logo}></use>
          </svg>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Nature</a>
            </li>
          </ul>
        </div>
        <div>
          {name ? (
            <>
              <p>Hello, {name}!</p>
              <button
                onClick={() => {
                  setItem(null);
                  setName(null);
                }}
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <button onClick={openSign} type="button">
                Sign up
              </button>
              <button onClick={openLog} type="button">
                Log in
              </button>
            </>
          )}
        </div>
      </Container>
    </header>
  );
};
