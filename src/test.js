const { sum, sub, mult, div } = require('./')

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

  describe('sub function', () => {
    test('subtracts positive numbers', () => {
      expect(sub(2, 1)).toBe(1)
    })

    test('subtracts negative numbers', () => {
      expect(sub(-1, -2)).toBe(1)
    })

    test('subtracts positive and negative numbers', () => {
      expect(sub(-1, 2)).toBe(-3)
    })
  })

  describe('mult function', () => {
    test('multiplies positive numbers', () => {
      expect(mult(2, 3)).toBe(6)
    })

    test('multiplies negative numbers', () => {
      expect(mult(-1, -2)).toBe(2)
    })

    test('multiplies positive and negative numbers', () => {
      expect(mult(-1, 2)).toBe(-2)
    })
  })

  describe('div function', () => {
    test('divides positive numbers', () => {
      expect(div(6, 2)).toBe(3)
    })

    test('divides negative numbers', () => {
      expect(div(-4, -2)).toBe(2)
    })

    test('divides positive and negative numbers', () => {
      expect(div(-4, 2)).toBe(-2)
    })

    test('divides by zero', () => {
      expect(() => div(1, 0)).toThrow()
    })
  })
})
