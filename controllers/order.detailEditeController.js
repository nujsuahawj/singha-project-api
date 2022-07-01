const conn = require('../dbConnection').promise();
exports.orderDetailEdite = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('UPDATE `order_detail` SET `order_id`=?,`category_id`=?,`order_qty`=? WHERE `id`=?', [
            req.body.order_id,
            req.body.category_id,
            req.body.order_qty,
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