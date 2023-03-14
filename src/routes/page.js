import express from "express";
import PageController from "../app/controllers/PageController";
const router = express.Router();
const pageController = new PageController();


router.use('/search', pageController.search);
router.use("/", pageController.index);

export default router;