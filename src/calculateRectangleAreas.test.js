import { calculateRectangleAreas } from './calculateRectangleAreas'

describe('calculateRectangleAreas', () => {
  it('throws if the parameter is not an 2d array', () => {
    expect(calculateRectangleAreas()).toThrow()
    expect(calculateRectangleAreas({})).toThrow()
    expect(calculateRectangleAreas(1)).toThrow()
    expect(calculateRectangleAreas('asdfasd')).toThrow()
    expect(calculateRectangleAreas([12, 3])).toThrow()
  })

  it('calculates all the rectangle areas in a set of 2 dimention array', () => {
    expect(calculateRectangleAreas([[3, 4]])).toEqual([12])
    expect(calculateRectangleAreas([[3,4], [8, 10]])).toEqual([12, 80])
    expect(calculateRectangleAreas([[1,2], [4, 2], [8, 18], [12, 5]])).toEqual([2, 8, 144, 60])
  })
})
