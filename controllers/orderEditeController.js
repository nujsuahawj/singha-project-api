const conn = require('../dbConnection').promise();
exports.orderEdite = async(req, res, next) => {
    // order edite
    try {
        const [rows] = await conn.execute('UPDATE `order` SET `emp_id`=?,`company_id`=?,`category_id`=?,`order_date`=? WHERE `id`=?', [
            req.body.emp_id,
            req.body.company_id,
            req.body.category_id,
            req.body.order_date,
            req.params.id
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({

                message: "ແກ້ໄຂຂໍ້ມູນສຳເລັດ",
            });
        }
    } catch (err) {
        next(err);
    }
}