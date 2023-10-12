import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

export default function RouterSwitch() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element= { <HomePage /> } />
            </Routes>
        </BrowserRouter>
    );
}