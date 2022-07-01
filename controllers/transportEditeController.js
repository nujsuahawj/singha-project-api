const conn = require('../dbConnection').promise();
exports.tranEdite = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('UPDATE `transport` SET `date`=?,`dimersisions`=?,`order_id`=?,`customer_id`=? WHERE `id`=?', [
            req.body.date,
            req.body.dimersisions,
            req.body.order_id,
            req.body.customer_id,
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