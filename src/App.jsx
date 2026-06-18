import { Toaster } from 'react-hot-toast';
import { Router } from './routes/Router';
import './styles/fonts.css';
import './styles/reset.css';
import './styles/styles.css';

function App() {
    return (
        <>
            <Toaster position="bottom-right" />
            <Router />
        </>
    );
}

export default App;
