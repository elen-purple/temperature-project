import styled from "styled-components";

export const Item = styled.li`
  background-color: ${({ theme }) => theme.colors.grey1};
  border-radius: 20px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 352px;
  }

  @media screen and (min-width: 1200px) {
    width: 272px;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  padding: 16px 12px;
  font-weight: 600;
`;
