import { WeekItem } from "../WeekItem/WeekItem";
import { List } from "./WeekListStyled";

export const WeekList = ({ city }) => {
  return (
    <>
      {city ? (
        <List>
          {city.map((weather, index) => (
            <WeekItem weather={weather} key={index} />
          ))}
        </List>
      ) : (
        <></>
      )}
    </>
  );
};
