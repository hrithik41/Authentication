import { Router } from "express";

import bearerToken from "../middleware/authMiddleware.js";
import movieController from "../controllers/movieController.js";
const router = Router();

router.get("/", bearerToken, movieController);

export default router;
