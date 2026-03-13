import bcrypt from "bcrypt";

const hashPassword = async (user_password) => {
    return await bcrypt.hash(user_password, 10);
}

const comparePassword = async (user_password, hash) => {
    return await bcrypt.compare(user_password, hash);
}

export { hashPassword, comparePassword };