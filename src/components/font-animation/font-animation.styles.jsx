import styled, { keyframes, css } from 'styled-components/macro';


const jump = keyframes`
from, to { transform: scale(1, 1); }
25% { transform: scale(0.9, 1.1); }
50% { transform: scale(1.1, 0.9); }
75% { transform: scale(0.95, 1.05); }
`;

const animationJump = css`
  transform: translatey(0px);
  animation: ${jump} 3s ease-in-out infinite;
`;

export const Container = styled.div`
  display: inline-block;
  ${animationJump}
`;

