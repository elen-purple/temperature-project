import { Item, Title } from "./PetsItemStyled";

export const PetsItem = ({ article: { urlToImage, title } }) => {
  return (
    <Item>
      <img src={urlToImage} alt="title" />
      <Title>{title}</Title>
    </Item>
  );
};
