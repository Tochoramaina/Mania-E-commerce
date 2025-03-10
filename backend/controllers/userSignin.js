const userModels = require('../models/userModels');
const bcrypt = require("bcryptjs")
async function userSignInController(req, res){
    try{
        const {email, passwords} = req.body;

        if(!email){
            throw new Error('Please provide email')
        }
        if(!password){
            throw new Error('Please provide password')
        }
       const user = await userModels.findOne({email});
       if(!user){
        throw new Error('User not found')
       }
       const checkPassword = await bcrypt.compare(password, user.password)
       if(checkPassword){
        const tokenData = {
            _id : user._id,
            email : user.email
        }
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, {expires: 60 * 60 * 8})
        const tokenOption = {
            httpOnly : true,
            secure : true
        }
        res.cookie('token', token, tokenOption).json({
            message : 'login successfully',
            data : token,
            success : true,
            error : false
        })
       }else{
        throw new Error('Please put correct password')
       }

    }catch(err){
    res.json({
        message : err.message || err,
        error : true,
        success : false
    })
}
module.exports = userSignInController