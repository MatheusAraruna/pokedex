import React from 'react'
import * as S from './styles'

export interface ItemData {
  id: number
  name: string
  img?: string
  url?: string
}

interface ItemProps {
  item: ItemData
}

export default function Item({ item }: ItemProps) {
  const [active, setActive] = React.useState<boolean>(false)
  return (
    <S.Item active={active} onClick={() => setActive(!active)}>
      <img loading="lazy" alt="Image of a pokemon" src={item.img} />
      <span>Nº {item.id}</span>
      <h1>{item.name}</h1>
    </S.Item>
  )
}
