import React from 'react'
import * as S from './styles'

import Card from 'components/Card'
import Info from 'components/Info'
import Menu from 'components/Menu'

export default function Main() {
  return (
    <S.Container>
      <Menu />
      <S.View>
        <Card />
        <Info />
      </S.View>
    </S.Container>
  )
}
