const generateOTP = async () => {
    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    return otp;
}

const verifyOTP = async (db_otp, otp) => {
    if (!db_otp) {
        return false;
    };
    if (otp !== db_otp) {
        return false;
    }
    return true;
}

export { generateOTP, verifyOTP };