import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  padding-top: 20px;

  @media screen and (min-width: 480px) {
    padding-left: 20px;
    padding-top: 0;
  }
`;

export const Desc = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.background};

  @media screen and (min-width: 480px) {
    text-align: left;
    width: 140px;
  }
`;
