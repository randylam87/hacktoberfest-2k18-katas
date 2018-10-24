import { stopApologizing } from './stopApologizing';

describe('stopApologizing', () => {
  it('converts apologies to appreciative thanks', () => {
    expect(stopApologizing('sorry for taking your time')).toEqual(
      'thanks for taking your time'
    );

    expect(stopApologizing("I don't know what I'm doing, sorry").toEqual(
      "I don't know what I'm doing, thanks"
    ));
  });

});
