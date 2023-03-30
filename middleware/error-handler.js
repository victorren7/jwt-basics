const CustomAPIError = require('../errors/custom-error')

const errorHandlerMiddleWare = async (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({msg: err.message})
  }
  console.log('res', res)
    return res.status(500).json({ msg: 'Something went wrong, please try again.'})
}

module.exports = errorHandlerMiddleWare