const { sum } = require('./')

describe('Testing arithmetic functions', () => {
  describe('sum function', () => {
    test('adds positive numbers', () => {
      expect(sum(1, 2)).toBe(3)
    })

    test('adds negative numbers', () => {
      expect(sum(-1, -2)).toBe(-3)
    })

    test('adds positive and negative numbers', () => {
      expect(sum(-1, 2)).toBe(1)
    })
  })
})
