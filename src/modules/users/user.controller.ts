import { Response } from "express";
import { findUserById } from "./user.service";
import { AuthRequest } from "../../middleware/auth.middleware";

export const getMe = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await findUserById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({ user });
  } catch (err) {
    console.error("getMe error", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};