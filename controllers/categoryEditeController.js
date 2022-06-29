const conn = require('../dbConnection').promise();
exports.cateEdite = async(req, res, next) => {
    // category edite
    try {
        const [rows] = await conn.execute('UPDATE `category` SET `type`=?,`type_name`=? WHERE `id`=?', [
            req.body.type,
            req.body.type_name,
            req.params.id
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({

                message: "The category has been change successfully.",
            });
        }
    } catch (err) {
        next(err);
    }
}