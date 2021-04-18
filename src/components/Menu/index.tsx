import React from 'react'
import * as S from './styles'

import Search from 'components/Search'
import List from 'components/List'

const array = [
  {
    id: 1,
    name: 'um',
    img: 'https://picsum.photos/200',
    url: 'https://picsum.photos/200',
  },
  {
    id: 2,
    name: 'dois',
    img: 'https://picsum.photos/200',
    url: 'https://picsum.photos/200',
  },
  {
    id: 3,
    name: 'três',
    img: 'https://picsum.photos/200',
    url: 'https://picsum.photos/200',
  },
  {
    id: 4,
    name: 'quatro',
    img: 'https://picsum.photos/200',
    url: 'https://picsum.photos/200',
  },
  {
    id: 5,
    name: 'cinco',
    img: 'https://picsum.photos/200',
    url: 'https://picsum.photos/200',
  },
  {
    id: 6,
    name: 'seis',
    img: 'https://picsum.photos/200',
    url: 'https://picsum.photos/200',
  },
  {
    id: 7,
    name: 'sete',
    img: 'https://picsum.photos/200',
    url: 'https://picsum.photos/200',
  },
  {
    id: 8,
    name: 'oito',
    img: 'https://picsum.photos/200',
    url: 'https://picsum.photos/200',
  },
  {
    id: 9,
    name: 'nove',
    img: 'https://picsum.photos/200',
    url: 'https://picsum.photos/200',
  },
  {
    id: 6,
    name: 'seis',
    img: 'https://picsum.photos/200',
    url: 'https://picsum.photos/200',
  },
  {
    id: 7,
    name: 'sete',
    img: 'https://picsum.photos/200',
    url: 'https://picsum.photos/200',
  },
  {
    id: 8,
    name: 'oito',
    img: 'https://picsum.photos/200',
    url: 'https://picsum.photos/200',
  },
  {
    id: 9,
    name: 'nove',
    img: 'https://picsum.photos/200',
    url: 'https://picsum.photos/200',
  },
  {
    id: 6,
    name: 'seis',
    img: 'https://picsum.photos/200',
    url: 'https://picsum.photos/200',
  },
  {
    id: 7,
    name: 'sete',
    img: 'https://picsum.photos/200',
    url: 'https://picsum.photos/200',
  },
  {
    id: 8,
    name: 'oito',
    img: 'https://picsum.photos/200',
    url: 'https://picsum.photos/200',
  },
  {
    id: 9,
    name: 'nove',
    img: 'https://picsum.photos/200',
    url: 'https://picsum.photos/200',
  },
  {
    id: 6,
    name: 'seis',
    img: 'https://picsum.photos/200',
    url: 'https://picsum.photos/200',
  },
  {
    id: 7,
    name: 'sete',
    img: 'https://picsum.photos/200',
    url: 'https://picsum.photos/200',
  },
  {
    id: 8,
    name: 'oito',
    img: 'https://picsum.photos/200',
    url: 'https://picsum.photos/200',
  },
  {
    id: 9,
    name: 'nove',
    img: 'https://picsum.photos/200',
    url: 'https://picsum.photos/200',
  },
]

export default function Menu() {
  return (
    <S.Container>
      <S.Logo src="/logo.png" alt="Imagem da logo, escrito pokedex" />
      <S.Heading>Filters</S.Heading>
      <S.Filters>
        <Search />
      </S.Filters>
      <List items={array} />
    </S.Container>
  )
}
