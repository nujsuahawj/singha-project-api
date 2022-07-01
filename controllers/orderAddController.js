const { validationResult } = require('express-validator');
const conn = require('../dbConnection').promise();

exports.orAdd = async(req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        const [rows] = await conn.execute('INSERT INTO `order`(`emp_id`,`company_id`,`category_id`,`order_date`) VALUES(?,?,?,?)', [
            req.body.emp_id,
            req.body.company_id,
            req.body.category_id,
            req.body.order_date
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