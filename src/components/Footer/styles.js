import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  align-items: center;
  justify-content: space-around;

  font-family: roboto;

  h1 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.8rem;
  }

  p {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.2rem;
  }
`;
