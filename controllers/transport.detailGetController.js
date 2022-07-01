const conn = require('../dbConnection').promise();
exports.getAllTranDetail = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('SELECT `transport_detail`.`id` AS id,`transport_detail`.`transport_qty` AS transport_qty,`transport_detail`.`transport_totol` AS transport_totol, category.type AS category_id FROM `transport_detail` JOIN `category` ON `transport_detail`.`category_id` = `category`.`id`;');
        res.json({
            transport_detail: rows
        });
    } catch (err) {
        next(err);
    }
}