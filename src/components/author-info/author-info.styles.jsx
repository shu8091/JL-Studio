import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  
  span, p{
    margin-top: 10px;
  }
`;

export const ImgContainer = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  overflow: hidden;
`;