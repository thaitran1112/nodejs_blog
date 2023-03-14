import express from "express";
import NewsController from "../app/controllers/NewsController";
const router = express.Router();
const newsController = new NewsController();

router.use('/:slug', newsController.show);
router.use('/', newsController.index);

export default router;