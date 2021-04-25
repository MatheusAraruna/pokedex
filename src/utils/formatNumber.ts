export default function formatNumber(number: number) {
  const str: string = number.toLocaleString()
  return str.padStart(3, '0')
}
