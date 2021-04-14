import styled from "styled-components/macro";

export const Content = styled.div`
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  width: 370px;
  height: 450px;
  background-color: #fff;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Up = styled.div`
  width: 100%;
  height: 40%;
  background-color: #f0f0f0;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Down = styled.div`
  width: 100%;
  height: 60%;
  background-color: #fff;
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
