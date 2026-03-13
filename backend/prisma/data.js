import prisma from "../src/config/prisma.js";

async function main() {
    const existingUser = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
        }
    });
    console.log(existingUser);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
