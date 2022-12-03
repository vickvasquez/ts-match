import isFunction from "../../lib/utils/isFunction"

describe("isFunction", () => {
  test('should return true when input is a function', () => {
    const fn = function () {}

    expect(isFunction(fn)).toBeTruthy()
    expect(isFunction(function() {})).toBeTruthy()
    expect(isFunction(() => {})).toBeTruthy()
  })

  test('should return false when input is not a function', () => {
    expect(isFunction(1)).toBeFalsy()
    expect(isFunction(false)).toBeFalsy()
    expect(isFunction(true)).toBeFalsy()
    expect(isFunction(undefined)).toBeFalsy()
    expect(isFunction(null)).toBeFalsy()
    expect(isFunction({})).toBeFalsy()
    expect(isFunction('')).toBeFalsy()
    expect(isFunction([])).toBeFalsy()
   })
})
