const mongoose = require("mongoose");
const QuoteSchema = require("../schemas/quote_schema");

const QuoteModel = mongoose.model("quote", QuoteSchema);

module.exports = QuoteModel;
