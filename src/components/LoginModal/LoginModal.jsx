import { IoClose } from "react-icons/io5";
import axios from "axios";
import { useState } from "react";
import { setItem } from "../../services/localStorage";
import {
  Backdrop,
  Button,
  Input,
  Label,
  Modal,
  Submit,
  Title,
  Error,
  Span,
  Message,
} from "./LoginModalStyled";

const usersApi = axios.create({
  baseURL: "https://692abbee7615a15ff24d828a.mockapi.io/temperature-project",
});

export const LoginModal = ({ log, closeLog, openSign, setUserId }) => {
  const [emailv, setEmail] = useState("");
  const [passwordv, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [hover, setHover] = useState(false);

  const logInUser = async (e) => {
    e.preventDefault();
    try {
      const request = await usersApi.get("/users");
      const array = request.data;
      const item = array.find(
        ({ email, password }) => email === emailv && password === passwordv
      );
      if (item) {
        setItem(item.index);
        setUserId(item.index);
        setError(false);
      } else {
        setError(true);
        return;
      }
      closeLog();
      setEmail("");
      setPassword("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {log ? (
        <Backdrop>
          <Modal>
            <Button
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              type="button"
              onClick={() => {
                closeLog();
                setEmail("");
                setPassword("");
                setError(false);
                setHover(false);
              }}
            >
              <IoClose size="24" fill={hover ? "#ffffff" : "#2C2C2C"} />
            </Button>
            <Title>Log in</Title>
            <form onSubmit={logInUser}>
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
                <Error>*The email or password is incorrect</Error>
              ) : (
                <></>
              )}
              <Message>
                If you don`t an account -{" "}
                <Span
                  onClick={() => {
                    openSign();
                    closeLog();
                  }}
                >
                  Sign up
                </Span>
              </Message>
              <Submit type="submit">Log in</Submit>
            </form>
          </Modal>
        </Backdrop>
      ) : (
        <></>
      )}
    </>
  );
};
