import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PromptPage from './pages/PromptPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AccountPage from './pages/AccountPage';
import LogoutPage from './pages/LogoutPage';

export default function RouterSwitch() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element= { <HomePage /> } />
                <Route path='/prompt' element= { <PromptPage /> } />
                <Route path='/login' element= { <LoginPage /> } />
                <Route path='/register' element= { <RegisterPage /> } />
                <Route path='/account' element= { <AccountPage /> } />
                <Route path='/logout' element= { <LogoutPage /> } />
            </Routes>
        </BrowserRouter>
    );
}