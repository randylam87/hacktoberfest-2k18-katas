import {
  AlternatingCharacters
} from './AlternatingCharacters';

describe('AlternatingCharacters', () => {
  it('returns an array of integers representing the minimum number of deletions to make the alternating string for each string in array', () => {
    expect(AlternatingCharacters(['AAAA', 'BBBBB', 'ABABABAB', 'BABABA', 'AAABBB'])).toEqual([3, 4, 0, 0, 4]);
    expect(AlternatingCharacters(['AAABBBAABB', 'AABBAABB', 'ABABABAA'])).toEqual([6, 4, 1]);
    expect(AlternatingCharacters(['ABBABBAA'])).toEqual([3]);
    expect(AlternatingCharacters(['ABABBABAAB', 'BABAABBAAB', 'AAAABBAAAA', 'BABBABABBA', 'AABBBBAAAA', 'BAAAABBBBB', 'BBABAAAABB', 'BBBAAABBAB', 'BABAAABBBB', 'AAAABAABBB'])).toEqual([2, 3, 7, 2, 7, 7, 5, 5, 5, 6])
  });
});
