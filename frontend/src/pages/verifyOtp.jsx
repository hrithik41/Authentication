import { useState } from "react";
import { verifyOtp } from "../services/api";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function VerifyOtp() {

  const [otp, setOtp] = useState(["", "", "", ""]);
  const location = useLocation();
  const email = location.state?.email;
  const navigate = useNavigate();

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // move focus to next input
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    const otpValue = otp.join("");

    try {
      const userData = { email: email, otp: otpValue };
      console.log(userData);
      const response = await verifyOtp(userData);
      toast.success(response.data.message);
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data.message || error.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F9FB]">
      <div className="w-full max-w-[400px] p-8 bg-white rounded-2xl shadow-lg">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-800">
            Verify OTP
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            Enter the OTP sent to your email
          </p>
        </div>

        {/* OTP Form */}
        <form onSubmit={handleVerify} className="space-y-6">
          <div className="flex justify-between gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                className="w-14 h-14 text-center text-lg font-bold border border-slate-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500"
              />
            ))}
          </div>

          {/* Verify Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#3B5BDB] hover:bg-[#3451c7] text-white text-sm font-bold rounded-xl shadow-md transition-all"
          >
            Verify OTP
          </button>
        </form>

        {/* Resend OTP */}
        <div className="mt-6 text-center">

          <p className="text-sm text-slate-500">
            Didn't receive the OTP?
          </p>

          <button
            className="text-blue-600 font-semibold text-sm hover:text-blue-700 mt-1"
          >
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerifyOtp;