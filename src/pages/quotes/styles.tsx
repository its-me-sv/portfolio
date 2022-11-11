import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.4rem 12%;
  justify-content: space-around;
  overflow: auto;
  /* gap: 1.2rem; */
  /* mobile styles */
  @media only screen and (max-width: 768px) {
    padding: 1.4rem 4.2%;
  }
`;
