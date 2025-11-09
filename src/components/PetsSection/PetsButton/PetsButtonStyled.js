import styled from "styled-components";

export const Btn = styled.button`
  background-color: ${({ theme }) => theme.colors.accent1};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text};
  padding: 12px 32px;
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: 500;
  margin: 0 auto;

  &:hover {
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.accent2};
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 16px 40px;
    margin: 0;
  }
`;
