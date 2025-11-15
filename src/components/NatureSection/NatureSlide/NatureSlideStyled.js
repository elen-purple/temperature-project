import styled from "styled-components";

export const Img = styled.img`
  height: 250px;
  object-fit: cover;
  border-radius: 20px;
  max-width: calc(100vw - 80px);
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    max-width: 350px;
  }

  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
`;
