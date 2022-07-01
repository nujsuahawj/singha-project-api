const conn = require('../dbConnection').promise();
exports.getAllOrderDetail = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('SELECT `order_detail`.`id` AS id, `order`.id AS order_id,category.type AS category_id, order_detail.order_qty AS order_qty FROM `order_detail` JOIN `order` ON `order_detail`.`order_id` = `order`.`id` JOIN `category` ON `order_detail`.`category_id` = `category`.`id`;');
        res.json({
            order_detail: rows
        });
    } catch (err) {
        next(err);
    }
}