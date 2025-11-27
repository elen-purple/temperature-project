import styled from "styled-components";

export const Section = styled.section`
  padding: 60px 0;
  background-color: ${({ theme }) => theme.colors.background};

  @media screen and (min-width: 768px) {
    padding: 80px 0;
  }
`;

export const List = styled.ul`
  display: flex;
  padding: 32px 40px;
  background-color: ${({ theme }) => theme.colors.grey1};
  gap: 20px;
  flex-wrap: wrap;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    border-radius: 40px;
  }
`;

export const Item = styled.li`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 8px 12px;
  border-radius: 20px;
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 768px) {
    width: 314px;
  }

  @media screen and (min-width: 1200px) {
    width: 346px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const Subtitle = styled.p``;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 28px;
`;
