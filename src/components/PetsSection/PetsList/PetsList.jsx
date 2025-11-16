import { PetsItem } from "../PetsItem/PetsItem";
import { List } from "./PetsListStyled";

export const PetsList = ({ articles }) => {
  return (
    <List>
      {articles.map((article) => (
        <PetsItem key={article.id} article={article} />
      ))}
    </List>
  );
};
