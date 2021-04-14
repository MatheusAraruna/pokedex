import * as S from './styles'

interface TagProps {
  children: React.ReactNode
  color: string
}

export default function Tag({ children, color }: TagProps) {
  return (
    <S.Tag color={color}>
      <strong>{children}</strong>
    </S.Tag>
  )
}
