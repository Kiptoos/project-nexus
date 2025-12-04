import { Router } from "express";
import { login, register } from "./auth.controller";

const router = Router();

/**
 * @route POST /api/auth/register
 */
router.post("/register", register);

/**
 * @route POST /api/auth/login
 */
router.post("/login", login);

export default router;