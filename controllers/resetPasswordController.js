const jwt = require('jsonwebtoken');
const conn = require('../dbConnection').promise();
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');

exports.resetPassword = async(req,res,next) => {
    try{

        if(
            !req.headers.authorization ||
            !req.headers.authorization.startsWith('Bearer') ||
            !req.headers.authorization.split(' ')[1]
        ){
            return res.status(422).json({
                message: "Please provide the token",
            });
        }
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(422).json({ errors: errors.array() });
        }

        const theToken = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(theToken, 'the-super-strong-secrect');
        const hashPass = await bcrypt.hash(req.body.password, 12);
        const [rows] = await conn.execute('UPDATE `users` SET `password`=? WHERE `id`=?',[
            hashPass,
            decoded.id
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({
                
                message: "The user has been change password successfully.",
            });
        }
        
    }
    catch(err){
        next(err);
    }

}