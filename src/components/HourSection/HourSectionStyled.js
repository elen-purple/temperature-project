import styled from "styled-components";

export const Section = styled.section`
  padding: 60px 0;
  background-color: ${({ theme }) => theme.colors.background};

  @media screen and (min-width: 768px) {
    padding: 80px 0;
  }
`;

export const Wrap = styled.div`
  background-color: ${({ theme }) => theme.colors.grey1};
  padding: 28px 56px;
  border-radius: 40px;
`;

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  padding-bottom: 16px;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;
