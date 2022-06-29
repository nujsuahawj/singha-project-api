const { validationResult } = require('express-validator');
const conn = require('../dbConnection').promise();

exports.cateAdd = async(req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        const [rows] = await conn.execute('INSERT INTO `category`(`type`,`type_name`) VALUES(?,?)', [
            req.body.type,
            req.body.type_name
        ]);

        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The category has been successfully inserted.",
            });
        }

    } catch (err) {
        next(err);
    }
}