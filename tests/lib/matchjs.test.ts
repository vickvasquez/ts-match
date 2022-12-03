import matchjs from '../../lib/match'

describe('matchjs', () => {
  test('should return result when matching', () => {
    const cases = {
      '+': 2 + 3,
      '-': 3 - 2,
      '*': 2 * 3,
      true: 'true',
      false: 'false',
      200: 200
    }

    const plus = matchjs('+', cases)
    const less = matchjs('-', cases)
    const mulitply = matchjs('*', cases)

    expect(plus).toBe(5)
    expect(less).toBe(1)
    expect(mulitply).toBe(6)
    expect(matchjs('true', cases)).toBe('true')
    expect(matchjs('false', cases)).toBe('false')
    expect(matchjs(200, cases)).toBe(200)
  })

  test('should return result when case matched is a function', () => {
    const cases = {
      foo: () => 'bar'
    }
    const result = matchjs('foo', cases)

    expect(result).toBe('bar')
  })

  test('should return default value when not case matched', () => {
    const cases = {
      foo: () => 'bar',
      default: 'default'
    }
    const result = matchjs('bar', cases)

    expect(result).toBe('default')
  })

  test('should return correct instance when case matched is a class', () => {
    class Foo { }
    class Bar { }

    const cases = {
      foo: new Foo(),
      bar: new Bar(),
      bazz: () => new Bar(),
    }

    expect(matchjs('foo', cases)).toBeInstanceOf(Foo)
    expect(matchjs('bar', cases)).toBeInstanceOf(Bar)
  })

  test('should return result when input is a Map instance', () => {
    const map = new Map([['foo', 'Foo'], ['bar', 'Bar']])

    expect(matchjs('foo', map)).toBe('Foo')
    expect(matchjs('bar', map)).toBe('Bar')
  })

  test('should return a function if option skip skipFunctionsExecution is true', () => {
    const cases = {
      foo: () => { }
    }

    expect(matchjs('foo', cases, { skipFunctionsExecution: true })).toBeInstanceOf(Function)
  })

  test('should throw error when not matching', () => {
    expect(() => matchjs('foo', {})).toThrow('foo not found in dictionary, consider adding a default key to avoid throwing this error')
  })
})
