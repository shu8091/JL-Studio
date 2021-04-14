import styled from 'styled-components/macro';

export const Container = styled.div`
   /* border: 1px solid #dbdbdb; */
  width: 98%;
  margin: 0 auto;
  margin-bottom: 40px;
  border-radius: 20px;

  h2,
  h3,
  p,
  span {
    margin-bottom: 10px;
  }

  h2 {
    font-weight: 500;
  }

  a {
    width: 97px;
    color: #cc4e4e;
    padding: 10px 0px;
    letter-spacing: .5px;
    transition: opacity 0.2s ease 0s, transform 0.2s ease 0s;
    display: flex;
    justify-content: center;
    cursor: pointer;

    &:hover {
      color: #999;
    }

    &:active {
      transform: scale(0.9);
    }
  }
`;

export const ImgContainer = styled.div`
  background-color: #dbdbdb;
  width: 100%;
  height: 350px;
  margin: 10px auto;
  border-radius: 15px;
  overflow: hidden;
`;