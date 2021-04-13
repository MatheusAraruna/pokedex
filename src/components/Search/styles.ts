import styled from 'styled-components'

export const Container = styled.form`
  width: 100%;
  display: flex;
  input,
  button {
    height: 30px;
    border: none;
    background: var(--gray-light);
  }
`
export const Input = styled.input.attrs({ type: 'text' })`
  border-radius: 2px 0 0 2px;
  width: 100%;
  text-indent: 10px;
`
export const Button = styled.button.attrs({ type: 'submit' })`
  border-radius: 0 2px 2px 0;
  width: 30px;
  svg {
    width: 80%;
    height: 80%;
    margin: 10%;
    color: var(--black);
  }
`
