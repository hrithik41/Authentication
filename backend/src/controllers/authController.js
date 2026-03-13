import prisma from "../config/prisma.js";
import { generateToken } from "../services/tokenService.js";
import { hashPassword, comparePassword } from "../services/passwordService.js";
import { generateOTP } from "../services/otpService.js";
import { sendOtpMail } from "../services/sendMail.js";

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(name);
        if (!name) {
            return res.status(400).json({ message: "Name is required" });
        }
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        //Creating user in DB
        const hashedPassword = await hashPassword(password);
        const generateOtp = await generateOTP(email);
        await sendOtpMail(email, generateOtp);
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword,
                otp: generateOtp,
            },
        });
        // res.status(201).json({ message: `OTP : ${generateOtp}` });
        // await verifyOTPController(user.email, generateOtp);
        // res.status(201).json({ message: "OTP verified successfully" });
        const genToken = await generateToken(user.id, user.email);
        console.log("Token : ", genToken);
        await prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                token: genToken
            }
        })
        return res.status(201).json({ message: "OTP sent successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

const login = async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            return res.status(400).json({ message: "Email and password are required" });
        }
        const user = await prisma.user.findUnique({
            where: {
                email: req.body.email
            }
        })
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (!await comparePassword(req.body.password, user.password)) {
            return res.status(401).json({ message: "Invalid password" });
        }
        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}

export { register, login };
