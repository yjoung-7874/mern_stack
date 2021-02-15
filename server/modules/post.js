import mongoose from "mongoose"
import moment from "moment"

// Create Schema
const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: true
  },
  contents: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    default: -2
  },
  fileUrl: {
    type: String,
    default: "https://source.unsplash.com/random/301x201"
  },
  date: {
    type: Date,
    default: moment().format("YYYY-MM-DD hh:mm:ss"),
//    default: Date.now, // UTC TimeZone
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category"
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    }
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user", // from user.js
  },
});


const Post = mongoose.model("post", PostSchema);

export default Post;


