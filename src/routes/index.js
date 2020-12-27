import express from "express";
const router = express.Router();

import UrlControllers from "../controllers/urlControllers";
const urlController = new UrlControllers();

router.get("/", urlController.getUrl);
router.post("/", urlController.postUrl);
router.get("/:shortUrl", urlController.getShortUrl);
router.get("/*", urlController.getUrl);

export default router;
