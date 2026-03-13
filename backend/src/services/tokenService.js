import jwt from "jsonwebtoken";

const generateToken = async (id, email) => {
    const token = jwt.sign({
        id,
        email
    }, process.env.JWT_SECRET)
    return token;
}

const verifyToken = async (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}

export { generateToken, verifyToken };