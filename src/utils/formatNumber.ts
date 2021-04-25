export default (number: number) => {
  const str: string = number.toLocaleString()
  return str.padStart(3, '0')
}
