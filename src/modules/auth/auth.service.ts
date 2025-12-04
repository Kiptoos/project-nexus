import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../../utils/prisma";
import { env } from "../../config/env";

const SALT_ROUNDS = 10;

export const findUserByEmail = (email: string) => {
  return prisma.user.findUnique({ where: { email } });
};

export const createUser = async (name: string, email: string, password: string) => {
  const hashed = await bcrypt.hash(password, SALT_ROUNDS);
  return prisma.user.create({
    data: {
      name,
      email,
      password: hashed,
    },
  });
};

export const validatePassword = async (plain: string, hashed: string) => {
  return bcrypt.compare(plain, hashed);
};

export const generateToken = (userId: string, role: string) => {
  return jwt.sign({ userId, role }, env.jwtSecret, { expiresIn: env.jwtExpiresIn });
};