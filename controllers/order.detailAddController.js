const { validationResult } = require('express-validator');
const conn = require('../dbConnection').promise();

exports.ordetailAdd = async(req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        const [rows] = await conn.execute('INSERT INTO `order_detail`(`order_id`,`category_id`,`order_qty`) VALUES(?,?,?)', [
            req.body.order_id,
            req.body.category_id,
            req.body.order_qty
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