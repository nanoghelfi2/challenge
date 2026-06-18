import { notify } from '../../../utils/notify';
import { getCurrencies } from '../services/Currency';

export const handleGetCurrencies = async () => {
    const result = await getCurrencies();
    if (result.success) {
        return result.data;
    } else {
        notify.error('Error al obtener las monedas');
    }
    return result;
};
