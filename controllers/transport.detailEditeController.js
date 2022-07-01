const conn = require('../dbConnection').promise();
exports.tranDetailEdite = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('UPDATE `transport_detail` SET `category_id`=?,`transport_qty`=?,`transport_totol`=? WHERE `id`=?', [
            req.body.category_id,
            req.body.transport_qty,
            req.body.transport_totol,
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