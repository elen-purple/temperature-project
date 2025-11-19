import styled from "styled-components";

export const Section = styled.section`
  padding: 60px 0;
  background-color: ${({ theme }) => theme.colors.grey1};

  @media screen and (min-width: 768px) {
    padding: 80px 0;
  }
`;
