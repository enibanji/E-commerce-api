const User = require ('../models/User')
const {StatusCodes} = require('http-status-codes')
const CustomError = require('../errors')

const getAllUsers = async (req,res) => {
    const users = await User.find({role:'user'}).select('-password');
    res.status(StatusCodes.OK).json({users, total: users.length})
}

const getSingleUser = async (req,res) => {
    
    // alternative code to getSingleUSer
    // const {id} = req.params
    // const user = await User.findById(id).select('-password');

    const user = await User.findOne({_id:req.params.id}).select('-password');
    if (!user) {
        throw new CustomError.NotFoundError(`No user with id ${req.params.id}`)
    }    
    res.status(StatusCodes.OK).json({ user })
}


const showCurrentUser = async (req,res) => {
    res.send(' show current user')
}

const updateUser = async (req,res) => {
    res.send(' update user')
}

const updateUserPassword= async (req,res) => {
    res.send(' update User Password')
}

module.exports = {
    getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword,
}