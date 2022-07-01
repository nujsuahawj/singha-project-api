const conn = require('../dbConnection').promise();
exports.cmsEdite = async(req, res, next) => {
    // cm edite
    try {
        const [rows] = await conn.execute('UPDATE `customer` SET `company_name`=?,`address`=?,`name`=?,`service`=?,`phone`=? WHERE `id`=?', [
            req.body.company_name,
            req.body.address,
            req.body.name,
            req.body.service,
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