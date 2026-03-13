import jwt from "jsonwebtoken";
import prisma from "../config/prisma.js";

const bearerToken = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        console.log(authHeader);
        if(!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const token = authHeader.split(" ")[1];
        console.log(token);
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const user = await prisma.user.findUnique({
            where: {
                id: decodedToken.id
            }
        })
        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log(user);
        
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}

export default bearerToken;
