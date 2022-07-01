const conn = require('../dbConnection').promise();
exports.getDetailDeli = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('SELECT `delivery`.`id` AS id, customer.name AS customer_id, `order`.id AS order_id, delivery.delpriec AS delpriec,delivery.nettotal_price AS nettotal_price FROM `delivery` JOIN customer ON `delivery`.`customer_id` = customer.id JOIN `order` ON `delivery`.`order_id` = `order`.`id` where `delivery`.`id` = ?', [req.params.id]);
        if (rows.length > 0) {
            res.json({
                delivery: rows
            });
        } else {
            res.status(404).json({
                message: "ບໍ່ພົບຂໍ້ມູນ"
            });
        }
    } catch (err) {
        next(err);
    }
}