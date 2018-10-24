import { whitespaceRemoval } from './whitespaceRemoval';

describe('whitespaceRemoval', () => {
  it('removes whitespaces from strings like this', () => {
    expect(whitespaceRemoval('       Hello World!       ')).toEqual('Hello World!');
    expect(whitespaceRemoval('       Hacktoberfest')).toEqual('Hacktoberfest');
    expect(whitespaceRemoval('2018       ')).toEqual('2018');
  });
});
