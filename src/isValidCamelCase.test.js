import { isValidCamelCase } from './isValidCamelCase';

 describe('isValidCamelCase', () => {
   it('rejects invalid input', () => {
     expect(() => { isValidCamelCase(3); }).toThrow('Invalid input');
     expect(() => { isValidCamelCase(null); }).toThrow('Invalid input');
     expect(() => { isValidCamelCase(undefined); }).toThrow('Invalid input');
     expect(() => { isValidCamelCase({ key: 'value'}); }).toThrow('Invalid input');
     expect(() => { isValidCamelCase(['a', 'b', 'c']); }).toThrow('Invalid input');
   });

   it('returns true on valid camelCase', () => {
     expect(isValidCamelCase('validCamelCase')).toEqual(true);
     expect(isValidCamelCase('thisIsAlsoValidCamelCase')).toEqual(true);
   });

   it('returns false on invalid camelCase', () => {
     expect(isValidCamelCase('InvalidCamelCase')).toEqual(false);
     expect(isValidCamelCase('moreinvalidcamelcase')).toEqual(false);
     expect(isValidCamelCase('thisIsAlsoInvalidCamelcase')).toEqual(false);
   });
});
