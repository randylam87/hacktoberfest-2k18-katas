import { takeRight } from './takeRight';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(takeRight()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(takeRight()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(takeRight()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(takeRight()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { takeRight(); }).toThrow();
 */

describe('takeRight', () => {
    it('takeRight throw error...', () => {
        expect(() => {
            takeRight()
        }).toThrow();
        expect(() => {
            takeRight({})
        }).toThrow();
        expect(() => {
            takeRight(1)
        }).toThrow();
    });

    it('takeRight correctly...', () => {
        expect(() => {
            takeRight([1, 3, 5, 7])
        }).toEqual([7]);
        expect(() => {
            takeRight([2, 4, 6, 8, 10], 2)
        }).toEqual([8, 10]);
        expect(() => {
            takeRight('hello',3)
        }).toEqual('llo');
    });
});