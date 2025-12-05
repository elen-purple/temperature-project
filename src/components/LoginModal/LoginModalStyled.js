import styled from "styled-components";

export const Backdrop = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #00000088;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: calc(100% - 40px);
  border-radius: 20px;
  position: relative;
  padding: 60px 20px 32px;

  @media screen and (min-width: 500px) {
    width: 440px;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.accent1};
  line-height: 0;
  border-radius: 8px;
  padding: 4px;
  position: absolute;
  top: 20px;
  right: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent2};
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 28px;
  text-align: center;
  margin-bottom: 12px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  font-size: 16px;
  display: block;

  &:nth-child(1) {
    margin-bottom: 8px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 28px;
  margin-top: 4px;
  border: 2px solid ${({ theme }) => theme.colors.grey2};
  border-radius: 6px;
  padding: 0 8px;

  font-family: "Montserrat", sans-serif;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  font-size: 14px;
`;

export const Submit = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 32px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.accent1};
  font-size: 16px;
  border-radius: 8px;
  font-family: "Montserrat", sans-serif;

  &:hover {
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.accent2};
  }
`;

export const Error = styled.p`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.red};
  font-weight: 400;
  text-align: center;
  font-size: 14px;
`;

export const Message = styled.p`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  font-size: 14px;
  text-align: center;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.accent1};
  font-weight: 500;

  &:hover {
    text-decoration-line: underline;
    cursor: pointer;
  }
`;
