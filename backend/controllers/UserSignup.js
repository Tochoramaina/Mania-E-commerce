const userModels = require('../models/userModels');
const bcrypt = require('bcryptjs');


async function userSignUpController(req, res){
    try {
        const {email, password, name} = req.body;
        if(!email){
            throw new Error('Please proveide Email')
        }
        if(!password){
            throw new Error('Please proveide password')
        }
        if(!name){
            throw new Error('Please proveide name')
        }
       const salt = bcrypt.genSaltSync(10);
       const hashPassword = bcrypt.hashSync(password, salt)

       if(!hashPassword){
        throw new error('Something is wrong!')
       }
       const payload = {...req.body, password:hashPassword}
       const userData = new userModels(payload)
       const saveUser = userData.save();
       res.status(201).json({
        data : saveUser,
        success : true,
        error : false,
        message : 'User created successfully!'
       })

    } catch (err) {
        res.json({
            message: err,
            error : true,
            success : false
        })
    }
}
module.exports = userSignUpController