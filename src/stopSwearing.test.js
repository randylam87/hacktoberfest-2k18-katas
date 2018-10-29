import { stopSwearing } from './stopSwearing';

describe('stopSwearing', () => {
  it('replaces swear words with * symbols', () => {
    expect(stopSwearing('What the heck, John, why did you do that?!')).toEqual(
      'What the ****, John, why did you do that?!'
    );

    expect(stopSwearing('Damn son, do you believe in it?')).toEqual(
        '**** son, do you believe in it?'
    );

    expect(stopSwearing('That bastard shot me!')).toEqual(
        'That ******* shot me!'
    );
  });
});
