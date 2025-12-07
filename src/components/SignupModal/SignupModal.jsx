import { IoClose } from "react-icons/io5";
import axios from "axios";
import { useState } from "react";
import { setItem } from "../../services/localStorage";
import { nanoid } from "nanoid";
import {
  Backdrop,
  Button,
  Input,
  Label,
  Message,
  Modal,
  Span,
  Submit,
  Title,
  Error,
} from "./SignupModalStyled";

const usersApi = axios.create({
  baseURL: "https://692abbee7615a15ff24d828a.mockapi.io/temperature-project",
});

export const SignupModal = ({ sign, closeSign, openLog, setUserId }) => {
  const [usernamev, setUsername] = useState("");
  const [emailv, setEmail] = useState("");
  const [passwordv, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [hover, setHover] = useState(false);

  const signUpUser = async (e) => {
    e.preventDefault();
    try {
      const request = await usersApi.get("/users");
      const array = request.data;
      if (
        array.find(
          ({ username, email }) => username === usernamev || email === emailv
        )
      ) {
        setError(true);
        return;
      } else {
        setError(false);
      }
      const id = nanoid(4);
      await usersApi.post("/users", {
        index: id,
        username: usernamev,
        email: emailv,
        password: passwordv,
        favorite: [],
      });
      closeSign();
      setUsername("");
      setEmail("");
      setPassword("");
      setItem(id);
      setUserId(id);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {sign ? (
        <Backdrop>
          <Modal>
            <Button
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={() => {
                closeSign();
                setEmail("");
                setPassword("");
                setError(false);
                setHover(false);
              }}
              type="button"
            >
              <IoClose size="24" fill={hover ? "#ffffff" : "#2C2C2C"} />
            </Button>
            <Title>Sign up</Title>
            <form onSubmit={signUpUser}>
              <Label>
                Username
                <Input
                  value={usernamev}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  name="username"
                  required
                />
              </Label>
              <Label>
                Email
                <Input
                  value={emailv}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="useremail"
                  required
                />
              </Label>
              <Label>
                Password
                <Input
                  value={passwordv}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="userpass"
                  required
                />
              </Label>
              {error ? (
                <Error>The same email or password has already signed up</Error>
              ) : (
                <></>
              )}
              <Message>
                If you have already signed in -{" "}
                <Span
                  onClick={() => {
                    openLog();
                    closeSign();
                  }}
                >
                  Log in
                </Span>
              </Message>
              <Submit type="submit">Sign up</Submit>
            </form>
          </Modal>
        </Backdrop>
      ) : (
        <></>
      )}
    </>
  );
};
