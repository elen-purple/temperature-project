import styled from "styled-components";
import img from "../../imgs/natue.jpg";

export const Section = styled.section`
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.4) 100%,
      rgba(0, 0, 0, 0.4) 100%
    ),
    url(${img});
  padding: 120px 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 0;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.background};
  font-weight: 600;
  text-align: center;
  font-size: 48px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 60px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 480px) {
    flex-direction: row;
  }
`;

export const Wraper = styled.div`
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.background};

  @media screen and (min-width: 480px) {
    padding-right: 20px;
    border-right: 2px solid ${({ theme }) => theme.colors.background};
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export const Desc = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.background};

  @media screen and (min-width: 480px) {
    max-width: 250px;
    margin-left: auto;
    text-align: right;
  }
`;
