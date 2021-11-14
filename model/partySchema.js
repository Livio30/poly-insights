const mongoose = require('mongoose');

const party = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

const partySchema = mongoose.model("parties", party);

module.exports = partySchema;
