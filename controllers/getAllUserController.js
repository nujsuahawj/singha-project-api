const jwt = require('jsonwebtoken');
const conn = require('../dbConnection').promise();
// router get all users
exports.getAllUsers = async (req,res,next) => {
    // select * from users
    try{
        const [rows] = await conn.execute('SELECT `id`,`name`,`password` FROM users' );
        res.json({
            users:rows
        });
    }
    catch(err){
        next(err);
    }
}