import { config } from "dotenv";
config();
import app from "./app";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Project Nexus API running on http://localhost:" + PORT);
});