const CustomError = require('../errors')
const {isTokenValid} = require('../utils')

const authenticateUser = async (req,res,next) => {
    const token = req.signedCookies.token
    if(!token){
        throw new CustomError.UnauthenticatedError('Authentication Invalid')
    }
    try {
        const payload = isTokenValid({token})
        const {username, userId, role} = payload
        req.user = {username, userId, role}
        next()
    } catch (error) {
        throw new CustomError.UnauthenticatedError('Authentication Invalid')
    }
}

module.exports = {
    authenticateUser,
}