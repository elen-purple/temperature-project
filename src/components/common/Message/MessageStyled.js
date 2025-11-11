import styled from "styled-components";

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  text-align: center;
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
