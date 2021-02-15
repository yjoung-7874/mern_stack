import express from 'express'

// model
import Post from '../../modules/post'

const router = express.Router()

// api/post
// using async await method is necessary for using Mongoose methods(create(), find()) <-- better way
// or add .exec() at the end of method
// req : browser to server
// res : server to browser
router.get('/', async(req, res) => {
  const postFindResult = await Post.find()  // find from Post using find() method of Mongoose
  console.log(postFindResult, "All Post Get")
  res.json(postFindResult)
});

// add post
router.post('/', async(req, res, next) => {
  try{
    console.log(req, "req")
    // title = req.body.title, contents = req.body.contents
    const {title, contents, fileUrl, creator} = req.body
    const newPost = await Post.create({
      title, 
      contents,
      fileUrl,
      creator
    });
    res.json(newPost);
  } catch(e){
    console.log(e);
  }
});

export default router
