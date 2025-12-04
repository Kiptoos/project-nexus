import { prisma } from "../../utils/prisma";

export const findUserById = (id: string) => {
  return prisma.user.findUnique({
    where: { id },
    select: { id: true, name: true, email: true, role: true, createdAt: true },
  });
};