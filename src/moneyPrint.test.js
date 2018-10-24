import { moneyPrint } from './moneyPrint';

describe('moneyPrint', () => {
  it('moneyPrint throws an error when the input isn\'t a number', () => {
    expect(moneyPrint(null)).toThrow()
    expect(moneyPrint({})).toThrow()
    expect(moneyPrint([])).toThrow()
    expect(moneyPrint('abc')).toThrow()
    expect(moneyPrint('123')).toThrow()
  });

  it('moneyPrint enforces proper USD formatting, including cents', () => {
    expect(moneyPrint(19.99)).toEqual("$19.99")
    expect(moneyPrint(250)).toEqual("$250.00")
    expect(moneyPrint(9500.95)).toEqual("$9,500.95")
    expect(moneyPrint(100000)).toEqual("$100,000.00")
    expect(moneyPrint(345678912.34)).toEqual("$345,678,912.34")
  });

  it('moneyPrint rounds up partial cents', () => {
    expect(moneyPrint(2.2712)).toEqual("$2.28")
    expect(moneyPrint(3.295)).toEqual("$3.30")
    expect(moneyPrint(5.999)).toEqual("$6.00")
  });
});
