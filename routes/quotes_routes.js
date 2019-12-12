const express = require("express");
const router = express.Router();
const QuotesController = require("../controllers/QuotesController");

router.get("/", QuotesController.index);

router.post("/", QuotesController.create);

router.get("/:id", QuotesController.show);

module.exports = router;
