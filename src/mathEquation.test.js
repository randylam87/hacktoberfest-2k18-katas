import { mathEquation } from './mathEquation';

describe('mathEquation', () => {
  it('the given equation is valid', () => {
    expect(mathEquation('1+123=124')).toBeTruthy();
    expect(mathEquation('43/2=21.5')).toBeTruthy();
    expect(mathEquation('10.5-2.5=8')).toBeTruthy();
    expect(mathEquation('.5*10.=5)).toBeTruthy();
  });

  it('the given equation is invalid', () => {
    expect(mathEquation()).toBeFalsy();
    expect(mathEquation('')).toBeFalsy();
    expect(mathEquation(1)).toBeFalsy();
    expect(mathEquation(undefined)).toBeFalsy();
    expect(mathEquation('1=3')).toBeFalsy();
    expect(mathEquation('1+2=4')).toBeFalsy();
    expect(mathEquation('1..+2=3')).toBeFalsy();
    expect(mathEquation('1.1+2.2.2=4')).toBeFalsy();
  });
});
