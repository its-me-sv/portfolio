import styled from 'styled-components';
import { FadeAnim1 } from '../../utils/styles.util';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12%;
  margin-top: 1.4%;
  animation: ${FadeAnim1} 1s;
  padding: 0 7%;
`;

export const MenuItem = styled.span<{ selected: boolean; dark?: boolean }>`
  font-family: geomanist;
  font-size: 1.6rem;
  opacity: 0.7;
  cursor: pointer;
  color: #1a1a1a;
  ${props => props.dark && `color: #f5f4f9;`}
  ${(props) => props.selected && `
    text-decoration: underline;
    opacity: 1;
  `}
`;
