const conn = require('../dbConnection').promise();
exports.getAllTran = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('SELECT `transport`.`id` AS id,`transport`.`date` AS date,`transport`.`dimersisions` AS dimersisions, `transport`.`order_id` AS order_id,customer.name AS customer FROM `transport` JOIN `customer` ON `transport`.`customer_id` = `customer`.`id`;');
        res.json({
            transport: rows
        });
    } catch (err) {
        next(err);
    }
}