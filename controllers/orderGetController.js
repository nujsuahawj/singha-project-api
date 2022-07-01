const conn = require('../dbConnection').promise();
exports.getAllOrder = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('SELECT `order`.`id` AS id, employee.name AS emp_id, customer.name AS company_id, category.type AS category_id, `order`.`order_date` AS order_date FROM `order` JOIN employee ON `order`.`emp_id` = employee.id JOIN category ON `order`.`category_id` = category.id JOIN customer ON `order`.`company_id` = customer.id;');
        res.json({
            orders: rows
        });
    } catch (err) {
        next(err);
    }
}