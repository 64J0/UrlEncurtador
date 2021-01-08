import express from "express";
const router = express.Router();

import UrlController from "../controllers/UrlController";
const urlController = new UrlController();

router.get("/", urlController.getUrl);
router.post("/", urlController.postUrl);
router.get("/:shortUrl", urlController.getShortUrl);
router.get("/*", urlController.getUrl);

export default router;
