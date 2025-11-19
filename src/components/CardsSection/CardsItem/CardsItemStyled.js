import styled from "styled-components";

export const Item = styled.li`
  max-width: 300px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 20px;
  padding: 36px 24px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Location = styled.div`
  &:nth-child(1) {
    color: ${({ theme }) => theme.colors.accent2};
  }

  &:nth-child(2) {
    text-align: right;
  }
`;

export const Time = styled.p`
  font-size: 24px;
  text-align: center;
  margin-top: 8px;
`;

export const Body = styled.div`
  display: flex;
  margin-top: 12px;
  margin-bottom: 20px;
`;

export const Wrap = styled.div`
  width: 100%;
  text-align: right;
  padding-right: 12px;
  border-right: 2px solid ${({ theme }) => theme.colors.text};

  &:nth-child(2) {
    text-align: left;
    padding-left: 12px;
    border-right: none;
    padding-right: 0;
  }
`;

export const Temp = styled.p`
  font-size: 32px;
  text-align: center;
  margin-top: 20px;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.accent2};
`;
