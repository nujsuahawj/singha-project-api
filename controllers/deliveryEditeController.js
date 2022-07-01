const conn = require('../dbConnection').promise();
exports.deliEdite = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('UPDATE delivery SET `customer_id`=?,`order_id`=?,`delpriec`=?,`nettotal_price`=? WHERE `id`=?', [
            req.body.customer_id,
            req.body.order_id,
            req.body.delpriec,
            req.body.nettotal_price,
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