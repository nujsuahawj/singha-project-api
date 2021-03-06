const conn = require('../dbConnection').promise();
exports.getAllCate = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('SELECT `id`,`type`,`type_name` FROM category');
        if (rows.length > 0) {
            res.json({
                category: rows
            });
        } else {
            res.status(404).json({
                message: "ບໍ່ພົບຂໍ້ມູນ"
            });
        }
    } catch (err) {
        next(err);
    }
}