// server.js
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.routes.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json());
app.get("/", (req, res) => {
  res.send("<h2>🚀 QubitNets Backend is Running</h2>");
});
// Routes
app.use("/api/contact", contactRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});

export { app };
