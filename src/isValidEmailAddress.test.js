import { isValidEmailAddress } from './isValidEmailAddress';

describe('isValidEmailAddress', () => {
  it('It should return true if there is a name segment (before the \
    @ sign, a site (in between the @ and a period (.), and an end (after period))', () => {
    
      expect(isValidEmailAddress('josh@gmail.com')).toBeTruthy();
      expect(isValidEmailAddress('someone@anything.nil')).toBeTruthy();
      expect(isValidEmailAddress('@yahoo.com')).toBeFalsy()
      expect(isValidEmailAddress('name@.com')).toBeFalsy()
      expect(isValidEmailAddress('name@123.')).toBeFalsy()
      
  });

  it('should throw if it receives no args or something other than a  string', () => {
    // TODO Your own assertion here
    expect(isValidEmailAddress(null)).toThrow()
    expect(isValidEmailAddress(4321)).toThrow()
    expect(isValidEmailAddress(['name@123.'])).toThrow()
    expect(isValidEmailAddress({email: 'some@email.com'})).toThrow()
  });

});
