import { useState } from "react";
import { login } from "../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Email", email);
        console.log("Password", password);
        try {
            const userData = { email, password };
            await login(userData);
            toast.success("User logged in successfully!");
            console.log("User logged in successfully", userData);
        } catch (error) {
            console.error("Login Error:", error.response?.data || error.message);
            toast.error(error.response?.data.message || error.message);
        }
    };

    return (
        <div className="flex min-h-screen w-full items-center justify-center font-sans bg-[#F8F9FB] relative overflow-hidden">
            <div className={`w-full flex items-center justify-center p-8 z-20 relative transition-all duration-75`}>
                <div className="w-full max-w-[400px]">
                    <div className="text-center mb-10">
                        <h1 className="text-[28px] font-bold text-slate-800 mb-2.5 tracking-tight">Welcome to HOMI Tech</h1>
                        <p className="text-sm text-slate-500 font-medium">
                            Don't have an account?{" "}
                            <a href="/register" className="text-blue-600 font-bold hover:text-blue-700 transition-colors">Register Now ↗</a>
                        </p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {/* Email Input */}
                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Email</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder-slate-400 shadow-sm"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Password</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                    </svg>
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full pl-11 pr-12 py-3.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder-slate-400 shadow-sm"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors rounded-r-xl"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full mt-6 py-3.5 bg-[#3B5BDB] hover:bg-[#3451c7] text-white text-[15px] font-bold rounded-xl shadow-[0_4px_14px_0_rgba(59,91,219,0.39)] transition-all hover:shadow-[0_6px_20px_rgba(59,91,219,0.23)] hover:-translate-y-[1px] active:translate-y-0"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="mt-8 text-center pb-4">
                        <a
                            href="/forgot-password"
                            className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                        >
                            Forgot Password?
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;