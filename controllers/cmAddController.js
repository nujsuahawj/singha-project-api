const { validationResult } = require('express-validator');
const conn = require('../dbConnection').promise();

exports.cmAdd = async(req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        const [rows] = await conn.execute('INSERT INTO `customer`(`company_name`,`address`,`name`,`service`,`phone`) VALUES(?,?,?,?,?)', [
            req.body.company_name,
            req.body.address,
            req.body.name,
            req.body.service,
            req.body.phone
        ]);

        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "ເພີ່ມຂໍ້ມູນສຳເລັດແລ້ວ",
            });
        }

    } catch (err) {
        next(err);
    }
}