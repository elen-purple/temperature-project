import { MdOutlineSearch } from "react-icons/md";
import { Btn, Form, Input } from "./CardsFormStyled";
import { useState } from "react";

export const CardsForm = ({ changeSearch }) => {
  const [hover, setHover] = useState(false);
  return (
    <Form onSubmit={changeSearch}>
      <Input
        type="text"
        name="search"
        placeholder="Search location..."
        required
      />
      <Btn
        type="submit"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <MdOutlineSearch size="20" fill={hover ? "#ffffff" : "#2C2C2C"} />
      </Btn>
    </Form>
  );
};
