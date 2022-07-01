const conn = require('../dbConnection').promise();
exports.orderDelete = async(req, res, next) => {
    // category delete
    try {
        const [rows] = await conn.execute('DELETE FROM `order` WHERE `id`=?', [
            req.params.id
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({

                message: "ລົບຂໍ້ມູນສຳເລັດ",
            });
        }
    } catch (err) {
        next(err);
    }
}