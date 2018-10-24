import { unusedNumbers } from './unusedNumbers'
describe('unusedNumbers', () => {
  it('should return unused digits', () => {
    expect(unusedNumbers(12, 34, 56, 78)).toBe('09')
    expect(unusedNumbers(2015, 8, 26)).toBe('3479')
    expect(unusedNumbers(276, 575)).toBe('013489')
    expect(unusedNumbers(643)).toBe('0125789')
    expect(unusedNumbers(864, 896, 744)).toBe('01235')
    expect(unusedNumbers(364, 500, 71)).toBe('289')
  })

  it('works with any number of arguments', () => {
    expect(unusedNumbers()).toBe('0123456789'),
      expect(unusedNumbers(1, 11, 222, 1111, 44444)).toBe('0356789')
  })

  it('return an empty string if all numbers were used', () => {
    expect(unusedNumbers(1, 2, 3, 4, 567, 8, 9, 0, 102, 654)).toBe('')
  })
})
