const conn = require('../dbConnection').promise();
exports.getAllEm = async(req, res, next) => {
    // select * from em
    try {
        const [rows] = await conn.execute('SELECT `id`,`name`,`address`,`position`,`phone` FROM employee');
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