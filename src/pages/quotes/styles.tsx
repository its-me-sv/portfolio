import styled from "styled-components";

export const Container = styled.div<{ mobile: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 1.4rem 12%;
  overflow: auto;
  gap: 1.4rem;
  ${(props) => props.mobile && `padding: 1.4rem 4.2%;`}
`;
