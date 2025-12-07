import styled from "styled-components";

export const Section = styled.header`
  padding: 20px;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    @media screen and (min-width: 390px) {
      flex-direction: row;
      gap: 0;
    }
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media screen and (min-width: 1200px) {
    gap: 80px;
  }
`;

export const List = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 20px;
  }

  @media screen and (min-width: 1200px) {
    gap: 32px;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;

  &:hover {
    color: ${({ theme }) => theme.colors.accent1};
  }
`;

export const Right = styled.div`
  display: none;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Span = styled.span`
  font-weight: 500;
`;

export const Greeting = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
`;

export const Button = styled.button`
  display: block;
  background-color: ${({ theme }) => theme.colors.accent1};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text};
  padding: 8px 16px;
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: 500;
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.accent2};
  }
`;

export const Menu = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MenuBtn = styled.button`
  border: 3px solid ${({ theme }) => theme.colors.accent1};
  display: block;
  background-color: ${({ $menu }) =>
    $menu
      ? ({ theme }) => theme.colors.accent1
      : ({ theme }) => theme.colors.background};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text};
  padding: 8px 16px;
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: 500;
  text-align: center;

  &:hover {
    border: 3px solid ${({ theme }) => theme.colors.accent2};
  }
`;
