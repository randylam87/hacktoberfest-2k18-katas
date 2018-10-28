import { isRightTriangle } from './isRightTriangle'

describe('', () => {
    it('should return true when it is a right triangle', () => {
        expect(isRightTriangle(3,4,5)).toBeTruthy();
        expect(isRightTriangle(8,17,15)).toBeTruthy();
        expect(isRightTriangle(25,7,24)).toBeTruthy();
    });

    it('should return false when it is not a right triangle', () => {
        expect(isRightTriangle(1,2,3)).toBeFalsy();
        expect(isRightTriangle(11,24,13)).toBeFalsy();
        expect(isRightTriangle(10,2,4)).toBeFalsy();
    });

    it('should validate the input', () => {
        expect(() => { isRightTriangle(); }).toThrow();
        expect(() => { isRightTriangle("TestString"); }).toThrow();
        expect(() => { isRightTriangle(2, 2, "String"); }).toThrow();
        expect(() => { isRightTriangle([], [], 2); }).toThrow();
        expect(() => { isRightTriangle(3,4); }).toThrow();
    });
});



