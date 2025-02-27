import express from "express";
import { register,login,doLogin,doRegister } from "../Controllers/authController.js";
const router = express.Router();

router.get("/login", login);
router.get("/register", register);
router.post("/login", doLogin);
router.post("/register", doRegister);
export default router;