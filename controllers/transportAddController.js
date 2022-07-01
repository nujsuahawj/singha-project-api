const { validationResult } = require('express-validator');
const conn = require('../dbConnection').promise();

exports.tranAdd = async(req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        const [rows] = await conn.execute('INSERT INTO `transport`(`date`,`dimersisions`,`order_id`,`customer_id`) VALUES(?,?,?,?)', [
            req.body.date,
            req.body.dimersisions,
            req.body.order_id,
            req.body.customer_id
        ]);

        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "ເພີ່ມຂໍ້ມູນສຳເລັດ",
            });
        }

    } catch (err) {
        next(err);
    }
}