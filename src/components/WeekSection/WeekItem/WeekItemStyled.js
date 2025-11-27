import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 20px;
  padding: 12px;

  @media screen and (min-width: 768px) {
    gap: 0;
    flex-direction: row;
    padding: 12px 28px;
  }
`;

export const Day = styled.p`
  @media screen and (min-width: 768px) {
    width: 200px;
  }
  @media screen and (min-width: 1200px) {
    width: 400px;
  }
`;

export const Weather = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 4px;
    align-items: center;
    margin-right: auto;
  }
`;
