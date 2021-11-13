const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, required: true },
  reference: { type: String, required: true },
});

const blogSchema = mongoose.model("blogs", blogSchema);

export default blogSchema;
