const isNumber = (input: any): boolean => {
  return /^[0-9]+$/.test(input)
}

const isString = (input: unknown) => {
  return typeof input === 'string' || input instanceof String;
}

const isValidKey = (input: unknown): boolean => {
  return (isString(input) && input !== '') || isNumber(input)
}

export default isValidKey
