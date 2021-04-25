import formatNumber from 'utils/formatNumber'

import * as S from './styles'

export interface ItemData {
  id: number
  name: string
}

interface ItemProps {
  item: ItemData
  active: boolean
}

export default function Item({ item, active }: ItemProps) {
  return (
    <S.Item active={active}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
        alt={`Pokemon ${item.name} photo`}
        loading="lazy"
      />
      <span>Nº {formatNumber(item.id)}</span>
      <h1>{item.name}</h1>
    </S.Item>
  )
}
