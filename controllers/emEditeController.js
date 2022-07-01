const conn = require('../dbConnection').promise();
exports.emEdite = async(req, res, next) => {
    // em edite
    try {
        const [rows] = await conn.execute('UPDATE `employee` SET `name`=?,`address`=?,`position`=?,`phone`=? WHERE `id`=?', [
            req.body.name,
            req.body.address,
            req.body.position,
            req.body.phone,
            req.params.id
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({

                message: "ແກ້ໄຂຂໍ້ມູນສຳເລັດແລ້ວ",
            });
        }
    } catch (err) {
        next(err);
    }
}