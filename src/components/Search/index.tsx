import React from 'react'
import { useForm } from 'react-hook-form'

import * as S from './styles'
import { BiSearch } from 'react-icons/bi'

interface FormData {
  name: string
}

const Search = () => {
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit = handleSubmit(({ name }: FormData) => console.log(name))

  return (
    <S.Container onSubmit={onSubmit}>
      <S.Input
        placeholder="Name or ID"
        alt="Text field to search for the name or id of the pokemon"
        {...register('name', {
          required: true,
        })}
      />
      <S.Button>
        <BiSearch />
      </S.Button>
    </S.Container>
  )
}

export default Search
