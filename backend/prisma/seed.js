import prisma from "../src/config/prisma.js";
import { hashPassword } from "../src/services/passwordService.js";

async function main() {
    const existingUser = await prisma.user.findUnique({
        where: {
            email: "admin@gmail.com",
        },
    });
    if (!existingUser) {
        const user = await prisma.user.create({
            data: {
                name: "Admin",
                email: "admin@gmail.com",
                password: await hashPassword("admin"),
                role: "ADMIN",
            },
        });
        console.log("Admin Details : ", user);
    } else {
        console.log("Admin already exists");
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
