const express = require("express");
const router = express.Router();
const QuotesController = require("../controllers/QuotesController");

router.get("/", QuotesController.index);

router.post("/", QuotesController.create);

router.get("/random", QuotesController.random);

router.get("/:id", QuotesController.show);

router.delete("/:id", QuotesController.destroy);

router.patch("/:id", QuotesController.update);

router.put("/:id", QuotesController.update);

router.get("/:id/edit", QuotesController.edit);

module.exports = router;
