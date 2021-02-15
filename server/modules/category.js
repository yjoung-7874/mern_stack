import mongoose from "mongoose"
import moment from "moment"

// Create Schema
const CategorySchema = new mongoose.Schema({
  CategoryName: {
    type: String,
    default: "non-classified"
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post" // from post.js
    },
  ],
});


const Category = mongoose.model("category", CategorySchema);

export default Category;


