const jwt = require('jsonwebtoken');
const { UnathenticatedError } = require('../errors');

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnathenticatedError('No token provided')
  }

  const token = authHeader.split(' ')[1]
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const {id,username} = decoded
    req.user = {id, username}
    next()
   
  } catch (error) {
    throw new UnathenticatedError('No authorized to acces this route')

  }
   
}

module.exports = {
  authenticationMiddleware
}