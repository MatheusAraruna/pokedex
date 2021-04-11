// import { usePokeContext } from 'providers/ContextProvider'
import Select from 'components/Select'

const opt = [
  {
    display: 'Test 0',
    value: 'test 0',
  },
  {
    display: 'Test 1',
    value: 'test 1',
  },
  {
    display: 'Test 2',
    value: 'test 2',
  },
]

export default function Home() {
  return (
    <div>
      <Select name="teste" id="test" defaultValue="testando" options={opt} />
    </div>
  )
}
