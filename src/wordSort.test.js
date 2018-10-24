import { wordSort } from './wordSort';

describe('wordSort', () => {
  it('sorts words in numerical order', () => {
    const str = "an4d ea5t you2r pray3ers sa1y you6r vitam7ins"

    expect(wordSort(str)).toEqual("say your prayers and eat your vitamins")
  });

  it('returns the string in place if numbers are excluded', () => {
    const str = "wutcha gonna do when hulkamania runs wild on you"

    expect(wordSort(str)).toEqual("wutcha gonna do when hulkamania runs wild on you")
  });
});
