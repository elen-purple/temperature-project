import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 12px;
  width: 100%;
  justify-content: center;
  margin-bottom: 24px;
  position: relative;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const Wrap = styled.div`
  position: relative;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 24px;
  font-family: "Montserrat";
  font-size: 16px;

  &:hover,
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.accent1};
  }

  @media screen and (min-width: 480px) {
    width: 336px;
  }
`;

export const Btn = styled.button`
  min-width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.accent1};
  border-radius: 12px;
  line-height: 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent2};
  }
`;

export const BtnDagger = styled.button`
  min-width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 12px;
  line-height: 0;

  &:hover {
    background-color: #970808ff;
  }
`;

export const Incorrect = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-weight: 400;
  text-align: center;
  font-size: 14px;
  position: absolute;
  left: 8px;
  top: 40px;
`;
