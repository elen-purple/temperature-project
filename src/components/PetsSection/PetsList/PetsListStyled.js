import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    gap: 24px;
    margin-bottom: 32px;
  }
`;
