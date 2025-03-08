import express from "express";
import  URL from "../Database/Models/URL.js";
import User from "../Database/Models/user.js";
import authMiddleware from "../Middlewares/middleware.js";
const router = express.Router();

router.get("/page/profile",(req,res)=>{
    res.render("profile");
});

router.get("/api/profile", authMiddleware, async (req,res)=>{
    const user = req.user;
    const userData = await User.findById(user.id).select("-password");
    if (!userData) {
        return res.status(404).json({ message: "User not found" });
    }
    const userURLs = await URL.find({ user: user.id });
    res.json({  user: userData, userURLs: userURLs });
}) ;

export default router;
