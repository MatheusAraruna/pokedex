import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 200px;
  margin: 10px auto;
  select {
  }
`
export const Select = styled.select`
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: var(--gray-light);
  border-radius: 2px;
  border: none;
  width: 100%;
  height: 30px;
  text-indent: 10px;
  outline: none;
  color: var(--gray-dark);
  cursor: pointer;
`
export const Icon = styled.div`
  display: block;
  position: absolute;
  right: 2px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  svg {
    color: var(--gray-dark);
    font-size: var(--font-2xl);
  }
`
export const Option = styled.option``
