import mongoose from "mongoose";

const partySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

const partySchema = mongoose.model("parties", partySchema);

export default partySchema;
