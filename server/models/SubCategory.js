const mongoose = require("mongoose");

const SubCategorySchema = new mongoose.Schema(
    {

        category_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },
        brand_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Brand",
            required: true,
        },
        sub_category_name: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("SubCategory", SubCategorySchema);
