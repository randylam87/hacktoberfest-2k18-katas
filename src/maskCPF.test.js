import { maskCPF } from './maskCPF';

/**
 *  CPF is the Brazilian individual taxpayer registry identification, with specific pattern.
 */
describe('maskCPF', () => {
  it('throws error when there is no input', () => {
    expect(() => maskCPF()).toThrow();
  });

  it('your masked CPF number', () => {
    expect(maskCPF('12355478978')).toEqual('123.554.789-78');
    expect(maskCPF('98765432112')).toEqual('987.654.321-12');
    expect(maskCPF('123')).toEqual('Invalid format');
    expect(maskCPF('ABc')).toEqual('Invalid format');
  });
});