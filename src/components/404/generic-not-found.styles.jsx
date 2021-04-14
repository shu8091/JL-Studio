import styled, { keyframes } from 'styled-components/macro';


const wave = keyframes`
  0% {
    clip-path: polygon(0 55%, 8% 49%, 18% 45%, 30% 47%, 44% 57%, 57% 65%, 73% 69%, 100% 67%, 100% 100%, 0 100%);
    /* clip-path: polygon(0 49%, 9% 57%, 16% 61%, 22% 64%, 33% 65%, 41% 56%, 52% 50%, 66% 46%, 78% 45%, 90% 47%, 100% 50%, 100% 100%, 0 100%); */
  }

  50% {
    clip-path: polygon(0 45%, 7% 56%, 20% 62%, 33% 57%, 45% 46%, 61% 35%, 81% 31%, 100% 42%, 100% 100%, 0 100%);
    /* clip-path: polygon(0 42%, 7% 42%, 13% 42%, 22% 43%, 36% 45%, 48% 50%, 57% 54%, 68% 57%, 77% 53%, 88% 46%, 100% 38%, 100% 100%, 0 100%); */

  }

  100% {
    clip-path: polygon(0 55%, 8% 49%, 18% 45%, 30% 47%, 44% 57%, 57% 65%, 73% 69%, 100% 67%, 100% 100%, 0 100%);
    /* clip-path: polygon(0 49%, 9% 57%, 16% 61%, 22% 64%, 33% 65%, 41% 56%, 52% 50%, 66% 46%, 78% 45%, 90% 47%, 100% 50%, 100% 100%, 0 100%); */
  }
`;

const type = keyframes`
  0% {
    transform: translateX(0%);
  }

  25% {
    transform: translateX(120%);
  }

  50% {
    transform: translateX(120%);
  }

  75% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(0%);
  }
`;

const wait = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 200px;

  .wave {
      position: relative;
      /* width: 1200px; */
      height: 100px;
      /* background-color: #262626; */
      display: flex;
      justify-content: center;
      align-items: center;
    }

    h2 {
      position: absolute;
      text-align: center;
      /* line-height: 500px; */
      font-size: 100px;
      text-transform: uppercase;
    }

    h2:nth-child(1) {
      /* color: #7efff5; */
      color: transparent;
      -webkit-text-stroke: 2px #d76d77;
    }

    h2:nth-child(2) {
      /* color: #03a9f4; */
      color: #0388c5;
      /* color: #9acd32; */
      background: linear-gradient(to top, #3a1c71, #d76d77, #ffaf7b);
      background: -webkit-linear-gradient(to top, #3a1c71, #d76d77, #ffaf7b);
      /* background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%); */
      /* background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%); */
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      /* clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%); */
      animation: ${wave} 2s ease-in-out infinite;
    }

    .content {
      height: 30vh;
      line-height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }

    h3 {
      display: inline-block;
      font-weight: 400;
      font-size: 50px;
      position: relative;
    }

    .typing::before {
      content: '';
      width: 120%;
      height: 100%;
      background-color: #f7f7f7;;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      /* transition: all 1s; */
      animation: ${type} 10s steps(24) infinite;
    }

    .waiting {
      animation: ${wait} 1.2s infinite;
    }

    .info {
      line-height: 25px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
`;

