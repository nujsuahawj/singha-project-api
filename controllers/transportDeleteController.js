const conn = require('../dbConnection').promise();
exports.tranDelete = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('DELETE FROM `transport` WHERE `id`=?', [
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