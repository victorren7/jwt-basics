const {CustomAPIError} = require('../errors')
const {StatusCodes} = require('http-status-codes')

const errorHandlerMiddleWare = async (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({msg: err.message})
  }
  console.log('res', res)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Something went wrong, please try again.'})
}

module.exports = errorHandlerMiddleWare