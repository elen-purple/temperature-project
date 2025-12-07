import { MdOutlineSearch } from "react-icons/md";
import {
  Btn,
  BtnDagger,
  Form,
  Incorrect,
  Input,
  Wrap,
} from "./CardsFormStyled";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export const CardsForm = ({
  changeSearch,
  value,
  setValue,
  incorrect,
  resetSearch,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <Form onSubmit={changeSearch}>
      <Wrap>
        <Input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="text"
          name="search"
          placeholder="Search location..."
        />
        {incorrect ? <Incorrect>*Please, enter something</Incorrect> : <></>}
      </Wrap>
      <BtnDagger onClick={resetSearch} type="reset">
        <IoClose size="20" fill="#ffffff" />
      </BtnDagger>
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
