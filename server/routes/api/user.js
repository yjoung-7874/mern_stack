// jwt(JSON Web Token) web token authentication
// Server doesn't keep looking user logged in
// it only response when user logging in or occur request (server less burdened)
import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from "../../config/index"
// Model
import User from "../../modules/user"

const { JWT_SECRET } = config
const router = express.Router()

// @routes  Get api/user
// @desc    Get all user
// @access  public 

router.get('/', async(req, res) => {
  try {
    const users = await User.find()
    if(!users) throw Error("No users")
    res.status(200).json(users);
  } catch (e) {
    console.log(e);
    res.status(400).json({msg: e.message});
  }
});

router.post('/', (req, res) => {
  console.log(req)
  const {name, email, password} = req.body
  
  // Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({msg: "Please fill all field required.."})
  }
  
  // Check existing user
  User.findOne({email}).then((user) => {
    if(user) return res.status(400).json({msg: "User registered already.."})
    const newUser = new User({
      name, email, password
    })

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if(err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            {id: user.id},
            JWT_SECRET,
            {expiresIn: 3600}, // expires in 3600 sec "10h" "10d" also available
            (err, token) => {
              if(err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email }
	      })
	    }
          )
	})
      })
    })
  });
})

export default router
