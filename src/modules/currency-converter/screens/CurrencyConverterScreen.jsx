import { Header } from '../../../components/header/Header';
import { Calculator } from '../components/Calculator';
import { CurrencyTitle } from '../components/CurrencyTitle';
import { LastUpdateMessage } from '../components/LastUpdateMessage';
import { CurrencyConverterProvider } from '../context/CurrencyConverterContext';

export const CurrencyConverterScreen = () => {
    return (
        <CurrencyConverterProvider>
            <div className="h-screen w-screen flex flex-col main-background">
                <Header title={'Currency Converter'} />
                <div className="flex flex-col items-center justify-start gap-10">
                    <CurrencyTitle />
                    <Calculator />
                </div>
                <div className="lg:hidden p-4!">
                    <LastUpdateMessage />
                </div>
            </div>
        </CurrencyConverterProvider>
    );
};
