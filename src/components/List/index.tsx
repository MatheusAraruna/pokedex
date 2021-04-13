import { CSSProperties } from 'react'
import { AutoSizer } from 'react-virtualized'
import { FixedSizeList as ListItems } from 'react-window'
import * as S from './styles'

import Item, { ItemData } from 'components/Item'

interface RendererProps {
  index: number
  style: CSSProperties
}

interface ListProps {
  items: ItemData[]
}

export default function List({ items }: ListProps) {
  const rendererItems = ({ index, style }: RendererProps) => (
    <div style={style}>
      <Item item={items[index]} />
    </div>
  )

  return (
    <S.List>
      <AutoSizer>
        {({ width, height }) => (
          <ListItems
            height={height}
            width={width}
            itemSize={60}
            itemCount={items.length}
          >
            {rendererItems}
          </ListItems>
        )}
      </AutoSizer>
    </S.List>
  )
}
