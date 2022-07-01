const { validationResult } = require('express-validator');
const conn = require('../dbConnection').promise();

exports.tranDetailAdd = async(req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        const [rows] = await conn.execute('INSERT INTO `transport_detail`(`category_id`,`transport_qty`,`transport_totol`) VALUES(?,?,?)', [
            req.body.category_id,
            req.body.transport_qty,
            req.body.transport_totol
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