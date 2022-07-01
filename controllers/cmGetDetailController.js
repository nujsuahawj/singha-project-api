const conn = require('../dbConnection').promise();
exports.getDetailCm = async(req, res, next) => {
    try {
        const [rows] = await conn.execute('SELECT `id`,`company_name`,`address`,`name`,`service`,`phone` FROM customer where id = ?', [req.params.id]);
        if (rows.length > 0) {
            res.json({
                customer: rows
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