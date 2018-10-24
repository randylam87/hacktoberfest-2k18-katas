
/**
 * Returns a correctly formatted CPF number
 * ATTN! Doesn't check CPF number validity!
 *
 * @param    {String}   cpf   11 digits
 *
 * @return   {String}         Argument string formatted as XXX.XXX.XXX-XX
 */
export const maskCPF = (cpf) => {
    if (!cpf) throw new Error('No argument provided!')
    if (!/^\d{11}$/.test(cpf)) return 'Invalid format'

    return `${cpf.slice(0,3)}.${cpf.slice(3,6)}.${cpf.slice(6,9)}-${cpf.slice(9,11)}`
};
