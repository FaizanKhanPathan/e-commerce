const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
    {

        category_name: {
            type: String,
            required: false,
        },
        brand_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Brand",
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
