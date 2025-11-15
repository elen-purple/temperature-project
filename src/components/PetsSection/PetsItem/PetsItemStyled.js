import styled from "styled-components";

export const Item = styled.li`
  background-color: ${({ theme }) => theme.colors.grey1};
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 352px;
  }

  @media screen and (min-width: 1200px) {
    width: 272px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 400;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Btn = styled.a`
  display: block;
  background-color: ${({ theme }) => theme.colors.accent1};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text};
  padding: 8px 16px;
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: 500;
  width: max-content;

  &:hover {
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.accent2};
  }
`;
