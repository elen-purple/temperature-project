import { PetsItem } from "../PetsItem/PetsItem";
import { List } from "./PetsListStyled";

export const PetsList = ({ articles }) => {
  return (
    <List>
      {articles.map((article, index) => (
        <PetsItem key={index} article={article} />
      ))}
    </List>
  );
};
