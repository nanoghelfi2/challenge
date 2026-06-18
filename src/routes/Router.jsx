import { Route, Routes } from 'react-router-dom';
import { CurrencyConverterScreen } from '../modules/currency-converter/screens/CurrencyConverterScreen';

export const Router = () => {
    return (
        <Routes>
            <Route element={<CurrencyConverterScreen />} path={'/'} />
        </Routes>
    );
};
