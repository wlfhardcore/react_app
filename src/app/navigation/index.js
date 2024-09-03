import { Routes, Route, Navigate } from 'react-router-dom';
import { BuyPhase, Home,Movie } from "../pages/index";
const Navigation = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<BuyPhase/>}
            />
        </Routes>
    );
};
export default Navigation;