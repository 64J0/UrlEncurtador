const express = require("express");
const router = express.Router();

const urlControllers = require("../controllers/urlControllers");

router.get("/", urlControllers.getUrl);
router.post("/", urlControllers.postUrl);
router.get("/:shortUrl", urlControllers.getShortUrl);
router.get("/*", urlControllers.getUrl);

module.exports = router;
