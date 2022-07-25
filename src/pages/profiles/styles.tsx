import styled from "styled-components";

export const Container = styled.div<{mobile: boolean}>`
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1.4rem;
  place-items: center;
  padding: 1.4% 0%;
  ${props => props.mobile && `
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 1rem;
  `}
`;
