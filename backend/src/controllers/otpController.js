import prisma from "../config/prisma.js"
import { verifyOTP } from "../services/otpService.js"

export const verifyOTPController = async (req, res) => {
    try {
        const { email, otp } = req.body;
        console.log("User OTP : ", otp);
        const dbOtp = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        console.log("DB OTP : ", dbOtp.otp);
        if (!otp) {
            return res.status(400).json({ message: "Please enter OTP" });
        }

        const verifiedOtp = await verifyOTP(dbOtp.otp, otp);
        if (!verifiedOtp) {
            return res.status(400).json({ message: "Invalid OTP" });
        }

        await prisma.user.update({
            where: {
                email: email
            },
            data: {
                otp: null,
                isVerified: true
            }
        })
        // Temporary delete user
        // await prisma.user.delete({
        //     where: {
        //         email: email
        //     }
        // })

        res.status(200).json({ message: "User created sucessfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}