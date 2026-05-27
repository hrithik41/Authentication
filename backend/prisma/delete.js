import prisma from "../src/config/prisma.js";

async function main() {
    const deleteUser = await prisma.user.delete({
        where: {
            email: "hrithik.mishra@enpointe.io",
        },
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });