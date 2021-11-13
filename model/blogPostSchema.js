import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{type: String},
    category:{type:String},
    image:{type:String},
    content:{type:String},
    usefulCount:{type:Number},
    reference:{type:String},
});

const blogSchema = mongoose.model("blogs", blogSchema);

export default blogSchema;