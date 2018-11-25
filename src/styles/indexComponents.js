import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Ul = styled.ul`
  list-style-type: none;
`;

export const Li = styled.li`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
`;

export const ItemCenterCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;


export const BgColor = styled.div`
  height: 100vh;
  background: #5D2477
  background: -webkit-radial-gradient(bottom right, #5D2477, #10054C)
  background: -moz-radial-gradient(bottom right, #5D2477, #10054C)
  background: radial-gradient(bottom right, #5D2477, #10054C)
`;

export const Form = styled.form`
  display: block;
  width: 300px;
  height: 200px;
`;
