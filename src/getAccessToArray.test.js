import { getAccessToArray } from './getAccessToArray';

describe('getAccessToArray', () => {
    function SafeVector(initValues = []) {
        const array = initValues;
        this.store = (index, value) => array[index] = value;
        this.push = (val) => array.push(val);
        this.get = (index) => array[index];
    }
    const array = []; 
    const v = new SafeVector(array);

    it('returns values of the original array', () => {
        expect(JSON.stringify(getAccessToArray(v))).toEqual(JSON.stringify(array));
    })
    it('returns reference to the original array', () => {
        expect(getAccessToArray(v)).toEqual(array);
    })
})
