import styled from "styled-components";

export const Container = styled.div`
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1.2rem;
  place-items: center;
  padding: 1.4% 0%;
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 1rem;
  }
`;
