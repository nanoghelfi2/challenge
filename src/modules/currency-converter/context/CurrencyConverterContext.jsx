import { createContext, useContext, useEffect, useState } from 'react';
import { useAsync } from '../../../hooks/useAsync';
import { notify } from '../../../utils/notify';
import { getCurrencies, getRates } from '../services/Currency';
const CurrencyConverterContext = createContext(null);

const buildCurrency = (code, currency) => {
    if (!currency) {
        return null;
    }

    return {
        code,
        ...currency,
    };
};

export const CurrencyConverterProvider = ({ children }) => {
    const [amount, setAmount] = useState(1);
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);

    const invertCurrencies = () => {
        setFrom(to);
        setTo(from);
    };

    /* Currencies */
    const handleGetCurrencies = async () => {
        const result = await getCurrencies();
        if (result.success) {
            const data = result.data;
            setFrom(data.USD);
            setTo(data.EUR);
            return result.data;
        } else {
            notify.error('Error al obtener las monedas');
        }
        return result;
    };

    const { data: currencies, loading: getCurrenciesLoading } = useAsync(handleGetCurrencies, {
        autoExecute: true,
    });

    /* Rates */
    const handleGetRate = async () => {
        if (!from) return;
        if (!rates || !rates[from?.symbol]) {
            const result = await getRates(from?.symbol);
            if (result.success) {
                const data = result.data;
                return { ...rates, [from.symbol]: data };
            } else {
                notify.error('Error al obtener las tasas de cambio');
            }
        } else {
            return rates;
        }
    };
    const { data: rates, loading: getRatesLoading } = useAsync(handleGetRate, {
        autoExecute: true,
        deps: [from],
    });

    return (
        <CurrencyConverterContext.Provider
            value={{
                amount,
                setAmount,
                from,
                setFrom,
                to,
                setTo,
                rates,
                currencies,
                getCurrenciesLoading,
                getRatesLoading,
                invertCurrencies,
            }}
        >
            {children}
        </CurrencyConverterContext.Provider>
    );
};

export const useCurrencyConverter = () => {
    const context = useContext(CurrencyConverterContext);

    if (!context) {
        throw new Error('useCurrencyConverter must be used within a CurrencyConverterProvider');
    }

    return context;
};
