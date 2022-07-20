import styled from 'styled-components';

export const Container = styled.div`
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  place-items: center;
  gap: 1rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12rem;
  height: 14rem;
  overflow: auto;
  text-align: center;
  border-radius: 0.42rem;
  justify-content: space-evenly;
  padding: 0.42% 0;
  border: 2px solid #1a1a1a;
`;

export const Provider = styled.img`
  width: 7rem;
  height: auto;
  border-radius: 0.42rem;
`;

export const Name = styled.span`
  font-family: roboto;
`;

export const Issued = styled.span`
  font-family: bahnschrift;
`;

export const CredBtn = styled.div`
  font-family: geomanist;
`;
