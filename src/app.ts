import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./modules/auth/auth.routes";
import userRoutes from "./modules/users/user.routes";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "project-nexus-api", timestamp: new Date().toISOString() });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.use((_req, res) => {
  res.status(404).json({ message: "Route not found" });
});

export default app;