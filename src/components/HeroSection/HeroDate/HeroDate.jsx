import { Desc, Wrap } from "./HeroDateStyled";

export const HeroDate = ({}) => {
  function getOrdinal(day) {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  const makeDateText = () => {
    const date = new Date();
    const monthYear = date.toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    });
    const dayOfWeek = date.toLocaleString("en-US", { weekday: "long" });
    const dayOfMonth = date.getDate() + getOrdinal(date.getDate());
    const formattedDate = `${monthYear} ${dayOfWeek}, ${dayOfMonth}`;
    return formattedDate;
  };

  return (
    <Wrap>
      <Desc>{makeDateText()}</Desc>
    </Wrap>
  );
};
