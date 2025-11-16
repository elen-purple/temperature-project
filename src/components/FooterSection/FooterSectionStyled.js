import styled from "styled-components";

export const Section = styled.footer`
  padding: 40px 0;
  background-color: ${({ theme }) => theme.colors.accent2};
  @media screen and (min-width: 768px) {
    padding: 60px 0;
  }

  & > div {
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    @media screen and (min-width: 1200px) {
      justify-content: center;
      gap: 240px;
    }
  }
`;

export const Logo = styled.svg`
  display: block;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const Wrap = styled.div`
  margin-top: 28px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.background};
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 8px;
`;

export const Link = styled.a`
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.colors.background};

  &:hover {
    text-decoration-line: underline;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
`;
