import styled from "styled-components";

export const Section = styled.section`
  padding: 60px 0;
  background-color: ${({ theme }) => theme.colors.background};

  @media screen and (min-width: 768px) {
    padding: 80px 0;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 32px;
  margin-bottom: 24px;
  text-align: center;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 44px;
    margin-bottom: 32px;
    text-align: left;
  }
`;
