// import { usePokeContext } from 'providers/ContextProvider'
import List from 'components/List'

export default function Home() {
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
  ]

  return (
    <div style={{ width: '300px', height: '100vh' }}>
      <List items={array} />
    </div>
  )
}
