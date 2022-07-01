const conn = require('../dbConnection').promise();
exports.getDetailEm = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('SELECT `id`,`name`,`address`,`position`,`phone` FROM employee where id = ?', [req.params.id]);
        if (rows.length === 0) {
            res.status(404).json({
                message: 'ບໍ່ພົບຂໍ້ມູນ'
            });
        } else {
            res.json({
                employee: rows
            });
        }
    } catch (err) {
        next(err);
    }
}