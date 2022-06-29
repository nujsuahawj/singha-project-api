const conn = require('../dbConnection').promise();
exports.cateDelete = async(req, res, next) => {
    // category delete
    try {
        const [rows] = await conn.execute('DELETE FROM category WHERE `id`=?', [
            req.params.id
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({

                message: "The category has been deleted successfully.",
            });
        }
    } catch (err) {
        next(err);
    }
}