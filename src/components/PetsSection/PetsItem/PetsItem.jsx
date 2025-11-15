import { Btn, Item, Title, Text } from "./PetsItemStyled";

export const PetsItem = ({ article: { webTitle, webUrl, sectionName } }) => {
  return (
    <Item>
      <Text>{sectionName}</Text>
      <Title>{webTitle}</Title>
      <Btn target="_blanc" href={webUrl}>
        More detailes
      </Btn>
    </Item>
  );
};
