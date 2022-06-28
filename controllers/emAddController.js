const { validationResult } = require('express-validator');
const conn = require('../dbConnection').promise();

exports.emAdd = async(req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        const [rows] = await conn.execute('INSERT INTO `employee`(`name`,`address`,`position`,`phone`) VALUES(?,?,?,?)', [
            req.body.name,
            req.body.address,
            req.body.position,
            req.body.phone
        ]);

        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The em has been successfully inserted.",
            });
        }

    } catch (err) {
        next(err);
    }
}