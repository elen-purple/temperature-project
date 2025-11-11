import { Img } from "./NatureSlideStyled";

export const NatureSlide = ({ nature: { webformatURL } }) => {
  return <Img src={webformatURL} alt="Img" />;
};
