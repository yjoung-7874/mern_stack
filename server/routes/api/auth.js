import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import auth from '../../middleware/auth'
import config from '../../config/index'

const {JWT_SECRET} = config


// Module
import User from '../../modules/user'

const router = express.Router()

// @route  POST   api/auth    // Login Router
// @desc   Auth   user        // user authentication
// @access Public Public      // Login: Access from everyone


router.post('/', (req, res) => {
  const {email, password} = req.body

  // Simple validation
  if(!email || !password) {
    return res.status(400).json({msg: "Please fill in the fields"})
  }

  User.findOne({email}).then((user) => {
    if(!user) return res.status(400).json({msg: "user doesn't exist"})

    // Validate Password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if(!isMatch) return res.status(400).json({msg: "password doesn't matched"})
      jwt.sign({id:user.id}, JWT_SECRET, {expiresIn: "2 days"}, (err, token)=> {
        if(err) throw err;
	      res.json({
          token,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
	        },
	      });
      })
    });
  });
});

router.post('/logout', (req, res) => {
  res.json("successfully logged out")
})

router.get('/user', auth, async(req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password")
    if(!user) throw Error("there is no user")
    res.json(user)
  } catch (e) {
    console.log(e)
    res.status(400).json({msg: e.message})
  }
})


export default router