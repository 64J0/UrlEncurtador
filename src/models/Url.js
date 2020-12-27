import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UrlSchema = new Schema({
  fullUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  clicksCount: {
    type: Number,
    required: true,
    default: 0,
  },
});

// mongoose.model(modelName, schema)
module.exports = mongoose.model("UrlSchema", UrlSchema);
