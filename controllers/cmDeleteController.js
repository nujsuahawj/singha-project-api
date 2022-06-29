const conn = require('../dbConnection').promise();
exports.cmDelete = async(req, res, next) => {
    // cm delete
    try {
        const [rows] = await conn.execute('DELETE FROM customer WHERE `id`=?', [
            req.params.id
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({

                message: "The cm has been deleted successfully.",
            });
        }
    } catch (err) {
        next(err);
    }
}