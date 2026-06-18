import React, { useMemo } from 'react';
import { useCurrencyConverter } from '../context/CurrencyConverterContext';

export const CalculatorResult = () => {
    const { amount, from, to, rates, getRatesLoading } = useCurrencyConverter();

    const result = useMemo(() => {
        if (!rates || !from || !to) return '-';
        const rateToUse = rates[from.symbol]?.rates;
        const rate = rateToUse?.[to.symbol];
        if (!rate) return null;
        return amount * rate;
    }, [amount, from, to, rates]);

    const inverseRate = useMemo(() => {
        if (!rates || !from || !to) return '-';
        const rateToUse = rates[from.symbol]?.rates;
        const rate = rateToUse?.[to.symbol];
        if (!rate) return null;
        return 1 / rate;
    }, [from, to, rates]);

    return (
        <div className="flex flex-col mt-8!">
            <span className="text-3xl! font-medium! mt-4!">
                {amount} {from?.name} =
            </span>
            <span className="text-3xl! font-medium! flex items-center gap-2 ">
                {getRatesLoading ? <div className="simple-loader" /> : result} {to?.name}
            </span>
            <span className="text-sm! text-gray-500">
                {`1 ${to?.symbol} = ${inverseRate || '-'} ${from?.symbol}`}
            </span>
        </div>
    );
};
