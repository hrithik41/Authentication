import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";

app.listen(3005, () => {
    console.log("Server is running on port 3005");
});