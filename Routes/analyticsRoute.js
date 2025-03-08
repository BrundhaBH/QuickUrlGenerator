import express from "express";
import { getAnalytics } from "../Controllers/analyticsController.js";
import authMiddleware from "../Middlewares/middleware.js";
// import authMiddleware from "../middlewares/middleware.js"
const router = express.Router();

router.get("/api/analyze/:shortUrlId",authMiddleware, getAnalytics);
router.get("/page/analyze/:shortURLId", (req, res) => {
  res.render("analytics.ejs", { shortUrl: req.params.shortURLId });
});

export default router;