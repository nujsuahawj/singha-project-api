const conn = require('../dbConnection').promise();
exports.getAllDeli = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('SELECT `delivery`.`id` AS id, customer.name AS customer_id, `order`.id AS order_id, delivery.delpriec AS delpriec,delivery.nettotal_price AS nettotal_price FROM `delivery` JOIN customer ON `delivery`.`customer_id` = customer.id JOIN `order` ON `delivery`.`order_id` = `order`.`id`;');
        res.json({
            delivery: rows
        });
    } catch (err) {
        next(err);
    }
}