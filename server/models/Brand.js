const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema(
  {

    image_url: {
      type: String,
      required: false,
    },
    brand_name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Brand", BrandSchema);
