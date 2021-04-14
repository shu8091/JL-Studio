import styled, { keyframes } from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 300px;
  /* background-color: #fff; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const spanJump = keyframes`
  0% { opacity: .5 }
  50% { opacity: 1 }
  100% { opacity: .5 }
`;

export const Left = styled.div`
  width: 60%;
  height: 100%;
  position: relative;

  span{
    width: 120px;
    height: 30px;
    background-color: #d76d77;
    color: #fff;
    position: absolute;
    top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
    transition: all 3s;
  }

  span::before {
    content: 'NEW POST';
    position: absolute;
    left: 10px;
    animation: ${spanJump} 3s infinite;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Right = styled.div`
  width: 40%;
  height: 100%;
  /* background-color: #faa; */
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;

  span,
  h2,
  h5 {
    margin: 10px 0;
  }

  span {
    font-size: 1rem;
    letter-spacing: 2px;
  }

  h2 {
    font-weight: 600;
  }

  h5 {
    line-height: 22px;
  }
`;
