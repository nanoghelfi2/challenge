import { useMemo } from 'react';
import { Input } from '../../../components/inputs/Input';
import { Select } from '../../../components/inputs/Select';
import { useCurrencyConverter } from '../context/CurrencyConverterContext';
import { CalculatorResult } from './CalculatorResult';
import { Exchange } from '../../../icons/Exchange';
import { LastUpdateMessage } from './LastUpdateMessage';

export const Calculator = () => {
    const { amount, setAmount, from, setFrom, to, setTo, currencies, invertCurrencies } =
        useCurrencyConverter();

    const currenciesArray = useMemo(() => Object.keys(currencies || {}), [currencies]);

    return (
        <div className="bg-white rounded-lg p-6 w-full max-w-[90%] lg:max-w-[80%] shadow-md ">
            <div className="flex justify-between items-center lg:gap-20 flex-wrap lg:flex-nowrap">
                <Input
                    iconLeft={<span className="font-medium! text-lg!">$</span>}
                    type="number"
                    min={1}
                    label="Amount"
                    value={amount}
                    className="w-full"
                    onChange={(value) => {
                        if (value < 0) return setAmount(1);
                        setAmount(value);
                    }}
                />
                <Select
                    label="From"
                    value={from?.symbol || ''}
                    options={currenciesArray}
                    className="w-full"
                    getOptionText={(option) => currencies[option]?.name}
                    onChange={(value) => setFrom({ code: value, ...currencies[value] })}
                />
                <div
                    className="shrink-0 rounded-full border border-primary h-10 w-10 flex-full-center mt-4! cursor-pointer hover:bg-primary/10 transition-colors"
                    onClick={invertCurrencies}
                >
                    <Exchange color="var(--color-primary)" width="25" height="25" />
                </div>
                <Select
                    label="To"
                    value={to?.symbol || ''}
                    options={currenciesArray}
                    className="w-full"
                    getOptionText={(option) => currencies[option]?.name}
                    onChange={(value) => setTo({ code: value, ...currencies[value] })}
                />
            </div>
            <div className="flex justify-between">
                <CalculatorResult />
                <div className="bg-strokes rounded-md p-6 w-[50%] text-base/8 mt-18! hidden lg:block font-medium!">
                    We use mid-market rate for our Converter. This is for informational purposes
                    only. You won't receive this rate when sending money
                </div>
            </div>
            <div className="w-full justify-end mt-8! font-medium! hidden lg:flex ">
                <LastUpdateMessage />
            </div>
        </div>
    );
};
