
import { prisma } from "@repo/db";

export const fetchUsers = async () => {
    try {
        const users = await prisma.user.findMany({

        });

        return users;
    } catch (error) {
            throw new Error("Error while fetching users")
    }


}