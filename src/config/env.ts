export const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: process.env.PORT || "4000",
  databaseUrl: process.env.DATABASE_URL || "",
  jwtSecret: process.env.JWT_SECRET || "change_me_in_production",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "1d",
};