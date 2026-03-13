import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import VerifyOtp from "./pages/verifyOtp";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/verifyOtp" element={<VerifyOtp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;