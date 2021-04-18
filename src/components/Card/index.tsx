import React from 'react'
import * as S from './styles'

import Tag from 'components/Tag'

export default function Card() {
  return (
    <S.Container>
      <S.Card>
        <S.Background>001</S.Background>
        <S.Header>
          <span>Nº 001</span>
        </S.Header>
        <S.Main>
          <img
            src="https://pokeres.bastionbot.org/images/pokemon/1.png"
            alt="pokemon"
          />
          <S.Tags>
            <Tag color="#7AC74C">grass</Tag>
            <Tag color="#96D9D6">ice</Tag>
          </S.Tags>
        </S.Main>
        <S.Footer>
          <span>Pokemon name</span>
        </S.Footer>
      </S.Card>
    </S.Container>
  )
}
