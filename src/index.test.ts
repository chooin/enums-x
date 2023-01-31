import enums from './index';

enum NumericEnums {
  A,
  B,
  C
}

enum StringEnums {
  Hello = 'Hello',
  你好 = '你好'
}

describe('test keys', () => {
  test('numeric keys', () => {
    expect(enums.keys(NumericEnums)).toEqual(['A', 'B', 'C'])
  })

  test('string keys', () => {
    expect(enums.keys(StringEnums)).toEqual(['Hello', '你好'])
  })
})

describe('test values', () => {
  test('numeric values', () => {
    expect(enums.values(NumericEnums)).toEqual([0, 1, 2])
  })

  test('string values', () => {
    expect(enums.values(StringEnums)).toEqual(['Hello', '你好'])
  })
})

describe('test entries', () => {
  test('numeric entries', () => {
    expect(enums.entries(NumericEnums)).toEqual([['A', 0], ['B', 1], ['C', 2]])
  })

  test('string entries', () => {
    expect(enums.entries(StringEnums)).toEqual([['Hello', 'Hello'], ['你好', '你好']])
  })
})

describe('test length', () => {
  test('numeric length', () => {
    expect(enums.length(NumericEnums)).toEqual(3)
  })

  test('string length', () => {
    expect(enums.length(StringEnums)).toEqual(2)
  })
})

describe('test key', () => {
  test('numeric key', () => {
    expect(enums.key(NumericEnums, NumericEnums.A)).toEqual('A')
  })

  test('string key', () => {
    expect(enums.key(StringEnums, StringEnums.你好)).toEqual('你好')
  })

  test('numeric key', () => {
    expect(enums.key(NumericEnums, 10)).toEqual(10)
  })

  test('string key', () => {
    expect(enums.key(StringEnums, 10)).toEqual(10)
  })
})
