import { useCurrencyConverter } from '../context/CurrencyConverterContext';

export const LastUpdateMessage = () => {
    const { from, setFrom, to, setTo, currencies, invertCurrencies, rates } =
        useCurrencyConverter();
    if (!rates || !rates[from?.symbol]) return null;
    const fromLabel = from?.name || from?.symbol || '-';
    const toLabel = to?.name || to?.symbol || '-';
    const date = new Date(rates?.[from?.symbol]?.date);
    const formatted = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    }).format(date);

    return (
        <span className="text-sm! w-fit">
            <span className="underline text-sm! whitespace-nowrap"> {fromLabel} </span> to{' '}
            <span className="underline text-sm! whitespace-nowrap">{toLabel}</span>
            conversion - Last update {formatted}
        </span>
    );
};
