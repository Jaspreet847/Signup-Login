const bcrypt = require('bcrypt');
const UserModel = require('../model/userModel')

const signup = (req,res) => {
    const {email,password} = req.body;
    bcrypt.hash(password,15)
    .then((user) => {
       return UserModel.create({email,password : user})
    .then(() => res.json())
    .catch(err => res.json(err))
    })
}


module.exports = { signup };