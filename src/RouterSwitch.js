import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PromptPage from './pages/PromptPage';
import LoginPage from './pages/LoginPage';

export default function RouterSwitch() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element= { <HomePage /> } />
                <Route path='/prompt' element= { <PromptPage /> } />
                <Route path='/login' element= { <LoginPage /> } />
            </Routes>
        </BrowserRouter>
    );
}