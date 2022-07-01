const { validationResult } = require('express-validator');
const conn = require('../dbConnection').promise();

exports.deliAdd = async(req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        const [rows] = await conn.execute('INSERT INTO `delivery`(`customer_id`,`order_id`,`delpriec`,`nettotal_price`) VALUES(?,?,?,?)', [
            req.body.customer_id,
            req.body.order_id,
            req.body.delpriec,
            req.body.nettotal_price
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