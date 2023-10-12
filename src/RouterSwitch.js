import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PromptPage from './pages/PromptPage';

export default function RouterSwitch() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element= { <HomePage /> } />
                <Route path='/prompt' element= { <PromptPage /> } />
            </Routes>
        </BrowserRouter>
    );
}