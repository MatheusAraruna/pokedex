import React from 'react'
import * as S from './styles'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

interface SectionProps {
  children: React.ReactNode
  title: string
}

const Section = ({ children, title }: SectionProps) => {
  const [active, setActive] = React.useState<boolean>(false)
  return (
    <S.Section>
      <S.Header onClick={() => setActive(!active)}>
        <h1>{title}</h1>
        {active ? <BiChevronUp /> : <BiChevronDown />}
      </S.Header>
      <S.Main active={active}>{children}</S.Main>
    </S.Section>
  )
}
export default Section
