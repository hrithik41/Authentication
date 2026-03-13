import express from "express";
import "dotenv/config";
import cors from "cors";
import authRoute from "./routers/authRoute.js";
import movieRoute from "./routers/movieRoute.js"

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Include /auth or /movies to redirect");
});

app.use("/auth", authRoute);
app.use("/movies", movieRoute);

export default app;
