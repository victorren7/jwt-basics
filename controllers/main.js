const CustomAPIError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')
const { BadRequestError } = require('../errors')

const login = async (req, res) => {
  const {username, password} = req.body
  if (!username || !password) {
   throw new BadRequestError('Please provide email and password')
  }

  //usually provided by DB
  const id = new Date().getDate()
  
  //small payload creates a better experience for user
  const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn:'30d'})

  res.status(200).json({msg: 'User created', token})

  console.log(username, password)
}

const dashboard = async (req,res) => {
  console.log(req.user)

  const luckyNumber = Math.floor(Math.random() *100)

  res.status(200).json({msg: `Hello, ${req.user.username}`, secret:`Here is your authorized data, your lucky number is ${luckyNumber}`})
}


module.exports = {
  login,
  dashboard
}