import React from 'react'
import { BiChevronDown } from 'react-icons/bi'
import * as S from './styles'

type Options = {
  value: string
  display: string
}

interface PropTypes {
  name: string
  id: string
  defaultValue?: string
  options: Options[]
}

const Select = ({ name, id, defaultValue, options }: PropTypes) => {
  return (
    <S.Container>
      <S.Icon>
        <BiChevronDown />
      </S.Icon>
      <S.Select name={name} id={id}>
        {defaultValue && (
          <S.Option value={defaultValue}>{defaultValue}</S.Option>
        )}
        {options &&
          options.map((opt, i) => (
            <S.Option key={i} value={opt.value}>
              {opt.display}
            </S.Option>
          ))}
      </S.Select>
    </S.Container>
  )
}

export default Select
