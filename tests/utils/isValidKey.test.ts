import isValidKey from '../../lib/utils/isValidKey'

describe('isValidKey', () => {
  test('should return true if key is valid', () => {
    expect(isValidKey('key')).toBeTruthy()
    expect(isValidKey(2)).toBeTruthy()
  })

  test('should return false if key is invalid', () => {
    expect(isValidKey({})).toBeFalsy()
    expect(isValidKey(true)).toBeFalsy()
    expect(isValidKey(null)).toBeFalsy()
    expect(isValidKey(undefined)).toBeFalsy()
    expect(isValidKey([])).toBeFalsy()
    expect(isValidKey('')).toBeFalsy()
  })
})
