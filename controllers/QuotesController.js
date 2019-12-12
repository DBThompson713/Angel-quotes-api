const QuoteModel = require("../database/models/QuoteModel");

async function index(req, res) {
  const quotes = await QuoteModel.find();
  try {
    res.json(quotes);
  } catch (err) {
    res.status(500).send(`Error: ${err}`);
  }
}

async function show(req, res) {
  let { id } = req.params;
  let quote = await QuoteModel.findById(id);
  try {
    res.json(quote);
  } catch (err) {
    res.status(500).send(`error: ${err}`);
  }
}

async function create(req, res) {
  let { quote } = req.body;
  let newQuote = await QuoteModel.create({ quote }).catch(err =>
    res.status(500).send(err)
  );
  res.json(newQuote);
}

// async function destroy(req, res) {
//   let { id } = req.params;
//   findByIdAndDelete(id);
// }

module.exports = {
  index,
  show,
  create
};
