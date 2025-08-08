// backend/routes/contact.routes.js
import express from "express";
import { handleContactForm } from "../controllers/contact.controller.js"; // Add .js extension

const router = express.Router();

router.route("/").post(handleContactForm);

export default router;
