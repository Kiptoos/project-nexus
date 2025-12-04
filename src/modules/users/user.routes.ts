import { Router } from "express";
import { getMe } from "./user.controller";
import { requireAuth } from "../../middleware/auth.middleware";

const router = Router();

/**
 * @route GET /api/users/me
 * @desc Get currently authenticated user
 */
router.get("/me", requireAuth, getMe);

export default router;