const QuoteModel = require("../database/models/QuoteModel");

async function index(req, res) {
  const quoteNumber = await QuoteModel.find().countDocuments();
  const random = Math.floor(Math.random() * quoteNumber);
  const quotes = await QuoteModel.find();
  console.log(quoteNumber);
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

async function destroy(req, res) {
  let { id } = req.params;
  await QuoteModel.findByIdAndRemove(id);
  res.redirect("/");
}

async function update(req, res) {
  let { quote } = req.body;
  let { id } = req.params;

  await QuoteModel.findByIdAndUpdate(id, { quote });
  res.redirect(`/quote/${id}`);
}

async function edit(req, res) {
  //shows the form to edit the resource
  let { id } = req.params;
  let quote = await QuoteModel.findById(id);
  res.render("quote/edit", { quote });
}

async function random(req, res) {
  const quoteNumber = await QuoteModel.find().countDocuments();
  const random = Math.floor(Math.random() * quoteNumber);
  const quotes = await QuoteModel.find();
  try {
    res
      .status(302)
      .send(" The Book of Angel says: " + JSON.stringify(quotes[random].quote));
  } catch (err) {
    res.status(500).send(`Error: ${err}`);
  }
}

module.exports = {
  index,
  show,
  create,
  destroy,
  update,
  edit,
  random
};
