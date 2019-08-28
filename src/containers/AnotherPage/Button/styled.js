import styled from 'styled-components';

const baseButton = styled.button`
  padding: 10px 20px;
  border: 0;
  border-radius: 3px;
  margin-left: 5px;
  margin-right: 5px;
`

export const GreenButton = styled(baseButton)`
  background-color: green;

`
export const RedButton = styled(baseButton)`
  background-color: red;
`
