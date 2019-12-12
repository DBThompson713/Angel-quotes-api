const express = require("express");
const router = express.Router();
const quotesRoutes = require("../routes/quotes_routes");

router.use("/quotes", quotesRoutes);

module.exports = router;
