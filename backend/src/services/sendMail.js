import nodemailer from "nodemailer";

export const sendOtpMail = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "OTP for authentication",
        text: `Your OTP is ${otp}`
    }
    try {
        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}