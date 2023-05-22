import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.5rem;

  padding: 5.55rem 6.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border: 1px solid #000204;
  border-radius: 0.8rem;
  position: relative;

  button {
    background: none;
    border: none;
    position: absolute;
    top: 1.6rem;
    right: 1.8rem;
  }
  svg {
    color: white;
  }

  img {
    width: 17.6rem;
  }

  .disheName {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.4rem;
  }

  .description {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.2rem;
  }

  .price {
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 5.1rem;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  @media (max-width: 820px) {
    padding: 8rem 6rem;

    .description {
      display: none;
    }

    img {
      width: 14.14rem;
    }
  }

  @media (max-width: 480px) {
    padding: 7rem 6rem;
    .disheName {
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
    .description {
      display: none;
    }

    .price {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.6rem;
    }

    img {
      width: 8.8rem;
    }
  }
`;
