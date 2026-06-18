import http from '../../../api/http';

export const getCurrencies = async () => {
    return await http.get('https://api.vatcomply.com/currencies');
};

export const getRates = async (base) => {
    console.log('base', base);
    return await http.get(`https://api.vatcomply.com/rates?base=${base}`);
};
