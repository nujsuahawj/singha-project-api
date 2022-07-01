const conn = require('../dbConnection').promise();
exports.emDelete = async(req, res, next) => {
    // em delete
    try {
        const [rows] = await conn.execute('DELETE FROM employee WHERE `id`=?', [
            req.params.id
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({

                message: "ລົບຂໍ້ມູນສຳເລັດແລ້ວ",
            });
        }
    } catch (err) {
        next(err);
    }
}