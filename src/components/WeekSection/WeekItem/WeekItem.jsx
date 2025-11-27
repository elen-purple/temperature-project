import { IoIosThunderstorm } from "react-icons/io";
import { BsCloudDrizzleFill } from "react-icons/bs";
import { IoIosRainy } from "react-icons/io";
import { IoIosSnow } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";
import { MdFoggy } from "react-icons/md";
import { LuTornado } from "react-icons/lu";
import { IoIosCloudy } from "react-icons/io";
import { FaQuestion } from "react-icons/fa6";
import { BsFillCloudHaze2Fill } from "react-icons/bs";
import { Day, Item, Weather } from "./WeekItemStyled";

export const WeekItem = ({
  weather: {
    dt_txt,
    weather,
    main: { temp_min, temp_max },
  },
}) => {
  return (
    <Item>
      <Day>
        {new Date(dt_txt).toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        })}
      </Day>
      <Weather>
        {weather ? (
          weather[0].main === "Thunderstorm" ? (
            <IoIosThunderstorm fill="#282446ff" size="54" />
          ) : weather[0].main === "Drizzle" ? (
            <BsCloudDrizzleFill fill="#8387afff" size="54" />
          ) : weather[0].main === "Rain" ? (
            <IoIosRainy fill="#5461a9ff" size="54" />
          ) : weather[0].main === "Snow" ? (
            <IoIosSnow fill="#cececeff" size="54" />
          ) : weather[0].main === "Clouds" ? (
            <IoIosCloudy fill="#bcbcbcff" size="54" />
          ) : weather[0].main === "Mist" || weather[0].main === "Fog" ? (
            <MdFoggy fill="#a4a4a4ff" size="54" />
          ) : weather[0].main === "Clear" ? (
            <IoIosSunny fill="#ffcc00ff" size="54" />
          ) : weather[0].main === "Extreme" ? (
            <LuTornado
              style={{ margin: "0 auto", display: "block" }}
              size="54"
            />
          ) : weather[0].main === "Haze" ? (
            <BsFillCloudHaze2Fill fill="#888073ff" size="54" />
          ) : (
            <FaQuestion fill="#2C2C2C" size="54" />
          )
        ) : (
          <FaQuestion
            fill="#2C2C2C"
            style={{ margin: "0 auto", display: "block" }}
            size="54"
          />
        )}
        <p>
          {Math.round(temp_max)}/{Math.round(temp_min)}°C
        </p>
      </Weather>
      <p>{weather ? weather[0].description : <></>}</p>
    </Item>
  );
};
