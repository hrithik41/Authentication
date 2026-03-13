import { Router } from "express";
import { register, login } from "../controllers/authController.js";
import { verifyOTPController } from "../controllers/otpController.js";
const router = Router();

router.get("/", (req, res) => {
    res.send("Include /register or /login to continue");
});

router.post("/register", register);

router.post("/login", login);

router.post("/verifyOtp", verifyOTPController);

export default router;