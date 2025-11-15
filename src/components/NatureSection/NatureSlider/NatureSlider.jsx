import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow } from "swiper/modules";
import { SwiperSlideStyled, SwiperStyled } from "./NatureSliderStyled";
import axios from "axios";
import { Message } from "../../common/Message/Message";
import { Loading } from "../../common/Loading/Loading";
import { useEffect, useState } from "react";
import { NatureSlide } from "../NatureSlide/NatureSlide";

const natureApi = axios.create({
  baseURL: "https://pixabay.com",
});

export const NatureSlider = () => {
  const [natures, setNatures] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const getNatures = async () => {
    setIsLoading(true);
    try {
      const request = await natureApi.get(
        `/api/?key=49666473-3abe1c6e3c5239c6859051d04&q=forest&image_type=photo&orientation=horizontal&editors_choice=true&per_page=20`
      );
      setNatures(request.data.hits);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getNatures();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Message text={"You have an error: " + error} />
      ) : (
        <SwiperStyled
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
          className="mySwiper"
        >
          {natures.map((nature) => (
            <SwiperSlideStyled key={nature.id}>
              <NatureSlide nature={nature} />
            </SwiperSlideStyled>
          ))}
        </SwiperStyled>
      )}
    </>
  );
};
