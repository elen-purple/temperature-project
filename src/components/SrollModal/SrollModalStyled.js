import styled from "styled-components";

export const Section = styled.section`
  padding-bottom: 100px;
  pointer-events: none;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  z-index: 2;
`;

export const Btn = styled.button`
  box-shadow: 0 0 12px 4px #00000066;
  min-width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.accent1};
  border-radius: 12px;
  line-height: 0;
  margin-left: auto;
  pointer-events: ${({ $scroll }) => ($scroll ? "all" : "none")};
  opacity: ${({ $scroll }) => ($scroll ? 1 : 0)};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent2};
  }
`;
