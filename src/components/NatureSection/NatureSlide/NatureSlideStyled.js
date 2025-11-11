import styled from "styled-components";

export const Img = styled.img`
  height: 250px;
  object-fit: cover;
  max-width: 350px;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
`;
