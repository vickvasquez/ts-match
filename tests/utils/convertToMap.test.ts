import convertToMap from '../../lib/utils/convertToMap'

describe('convertToMap', () => {
  test('should convert object to map', () => {
    const result = convertToMap({ foo: 'foo', bar: 'bar' })

    expect(result).toBeInstanceOf(Map)
    expect(result.get('foo')).toBe('foo')
    expect(result.get('bar')).toBe('bar')
  })
})
