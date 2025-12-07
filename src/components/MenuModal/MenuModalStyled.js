import styled from "styled-components";

export const Menu = styled.div`
  width: 100%;
  position: absolute;
  top: 136px;
  @media screen and (min-width: 390px) {
    top: 80px;
  }
  left: 0;
  padding: 40px 0;
  background-color: ${({ theme }) => theme.colors.grey1};

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;

  &:hover {
    color: ${({ theme }) => theme.colors.accent1};
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

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
