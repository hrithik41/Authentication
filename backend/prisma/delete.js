import prisma from "../src/config/prisma.js";

async function main() {
    const EMAIL_ADDRESS = ["EMAIL_ADDRESS"]
    const user = await prisma.user.deleteMany({
        where: {
            email: {
                in: EMAIL_ADDRESS
            }
        }
    });
    console.log(user);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
