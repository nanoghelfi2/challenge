import React from 'react';
import { useCurrencyConverter } from '../context/CurrencyConverterContext';

export const CurrencyTitle = () => {
    const { amount, from, to, getCurrenciesLoading } = useCurrencyConverter();

    return (
        <h2 className="text-3xl! font-bold text-center pt-10 text-white min-h-15">
            {getCurrenciesLoading ? (
                <div className="simple-loader" />
            ) : (
                `${amount} ${from?.symbol || ''} to ${to?.symbol || ''} - Convert ${from?.name || ''} to ${to?.name || ''}  `
            )}
        </h2>
    );
};
